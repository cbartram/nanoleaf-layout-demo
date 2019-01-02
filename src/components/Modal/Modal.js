import React, { Component } from 'react';
import moment from 'moment';
import './Modal.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false, // Is the dropdown for the expiration year visible?
            monthVisible: false, // Is the dropdown for the expiration month visible?
            error: null, // Was there an error processing payment?
            success: false, // Was the request successful?
            loading: false, // If the request is processing we don't want users to accidentally submit duplicate payments
            fields: {
                firstName: '',
                lastName: '',
                creditCard: '',
                expirationMonth: '',
                expirationYear: '',
                cvc: '',
                amount: 0,
            },
            missingValues: {
                firstName: false,
                lastName: false,
                creditCard: false,
                cvc: false,
            }
        }
    }

    updateField = (fieldName, e) => {
        let value = e.target.value;
        const valid = e.target.validity.valid || value.length === 0;

        // Convert $ -> ¢
        if(fieldName === 'amount')
            value = (+value * 100);

        this.setState({
            fields: {
                ...this.state.fields,
                [fieldName]: valid ? value : this.state.fields[fieldName], // Only apply to state if its value
            }
        });
    };

    /**
     * Updates the month field in the form based on a users selection
     * @param expirationMonth String expiration month that has been selected
     */
    handleMonthSelect = (expirationMonth) => {
        this.setState({
            fields: {
                ...this.state.fields,
                expirationMonth
            }
        });
    };

    /**
     * Updates the year field in the form based on the users selection
     * @param expirationYear
     */
    handleYearSelect = (expirationYear) => {
        this.setState({
            fields: {
                ...this.state.fields,
                expirationYear
            }
        });
    };

    /**
     * Handles showing a warning or error if the field is not filled correctly
     * @param fieldName String name of the field corresponding to
     */
    handleFieldBlur = (fieldName) => {
      if(this.state.fields[fieldName].length === 0) {
          this.setState({
              missingValues: {
                  ...this.state.missingValues,
                  [fieldName]: true,
              }
          })
      }
    };

    /**
     * Handles updating the state to reflect the selected amount the user wishes to donate
     * @param amount Integer amount of money in ¢ the users wishes to donate
     */
    handleAmountSelection = (amount) => {
        this.setState({
            fields: {
                ...this.state.fields,
                amount,
            }
        });
    };

    /**
     * Handles making the POST request containing the CC details to the backend
     */
    checkout = async () => {
        console.log('[INFO] Attempting to process card information');
        const { creditCard, firstName, lastName, cvc, expirationMonth, expirationYear, amount } = this.state.fields;
        // TODO Validate Fields
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                number: creditCard,
                exp_month: expirationMonth,
                exp_year: expirationYear,
                cvc: cvc,
                name: `${firstName} ${lastName}`,
                amount
            })
        };

        try {
            let response = await (await fetch('https://e7pdt8qmt1.execute-api.us-east-1.amazonaws.com/Dev/charge/create', params)).json();
            console.log(response);

            if(response.errorMessage)
                this.setState({ error: response.errorMessage });
            else
                this.setState({ success: true });
        } catch(err) {
            console.log(err);
            this.setState({ error: err.message });
        }
    };

    render() {
        return (
            <div className="modal" id="payment-modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Become a Backer</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            {
                                this.state.error &&
                                <div className="alert alert-danger" role="alert">
                                    <h4 className="alert-heading">Error</h4>
                                    <p>
                                        Unfortunately something went wrong processing your payment information. Ensure your
                                        card information is typed correctly and matches the details on your credit or debit card.
                                    </p>
                                    <hr />
                                    <p>
                                        You can try again by resubmitting the form below! Details of the error: &nbsp;
                                        { this.state.error }
                                    </p>
                                </div>

                                }

                            {
                                this.state.success &&
                                <div className="alert alert-success" role="alert">
                                    <h4 className="alert-heading">Thank You</h4>
                                    <p>
                                        Thank you for your generous donation to Nanoleaf Layout and helping to support the open source
                                        community.
                                    </p>
                                    <hr />
                                    <p>
                                        We sincerely appreciate it!
                                    </p>
                                </div>
                            }

                            {/* Donation Amount Button Group */}
                            <div className="btn-group ml-2" role="group" aria-label="First group">
                                <button type="button" className={`common-Button ${this.state.fields.amount === 200 ? 'selected': '' }`} style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }} onClick={() => this.handleAmountSelection(200)}>$2.00</button>
                                <button type="button" className={`common-Button ${this.state.fields.amount === 500 ? 'selected': '' }`} style={{ borderRadius: 0 }} onClick={() => this.handleAmountSelection(500)}>$5.00</button>
                                <button type="button" className={`common-Button ${this.state.fields.amount === 1000 ? 'selected': '' }`} style={{ borderRadius: 0 }} onClick={() => this.handleAmountSelection(1000)}>$10.00</button>
                                <button type="button" className={`common-Button ${this.state.fields.amount === 2500 ? 'selected': '' }`} style={{ borderRadius: 0 }} onClick={() => this.handleAmountSelection(2500)}>$25.00</button>
                                <button type="button" className={`common-Button ${this.state.fields.amount === 5000 ? 'selected': '' }`} style={{ borderRadius: 0 }} onClick={() => this.handleAmountSelection(5000)}>$50.00</button>
                                <button type="button" className={`common-Button ${this.state.fields.amount === 10000 ? 'selected': '' }`} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} onClick={() => this.handleAmountSelection(10000)}>$100.00</button>
                            </div>

                            <div className="form-row text amount">
                                <label className="amount" htmlFor="amount">Custom Amount ($)</label>
                                <input type="number" name="amount" id="amount" onChange={(e) => this.updateField('amount', e)} step="1" min="2" className="form-control" />
                            </div>

                            <div className="form-row text firstname">
                                <label className="firstname" htmlFor="firstname">Your first name</label>
                                <input
                                    onBlur={() => this.handleFieldBlur('firstName')}
                                    onChange={(e) => this.updateField('firstName', e)}
                                    value={this.state.fields.firstName}
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    placeholder="Jürgen"
                                    className={`${this.state.missingValues['firstName'] ? 'missing-value' : ''}`}
                                    required
                                />
                            </div>
                            <div className="form-row text lastname">
                                <label className="lastname" htmlFor="lastname">Your last name</label>
                                <input
                                    onBlur={() => this.handleFieldBlur('lastName')}
                                    onChange={(e) => this.updateField('lastName', e)}
                                    value={this.state.fields.lastName}
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    placeholder="Windcaller"
                                    className={`${this.state.missingValues['lastName'] ? 'missing-value' : ''}`}
                                    required
                                />
                            </div>
                            <div className="form-row text cc">
                                <label className="cc" htmlFor="cc">Credit Card Number</label>
                                <input
                                    onBlur={() => this.handleFieldBlur('creditCard')}
                                    onChange={(e) => this.updateField('creditCard', e)}
                                    value={this.state.fields.creditCard}
                                    pattern="[0-9]*"
                                    id="cc"
                                    name="cc"
                                    type="text"
                                    placeholder="4444 4444 4444 4444"
                                    className={`${this.state.missingValues['creditCard'] ? 'missing-value' : ''}`}
                                    required
                                />
                            </div>
                            <div className="form-row text expiration">
                                <label className="expiration" htmlFor="expirationMonth">Expiration Month</label>
                                <input
                                    id="expirationMonth"
                                    name="expirationMonth"
                                    onBlur={() => this.setState({ monthVisible: false })}
                                    onFocus={() => this.setState({ monthVisible: true })}
                                    onChange={() => {}}
                                    type="text"
                                    pattern="[0-9]*"
                                    placeholder="08"
                                    value={this.state.fields.expirationMonth}
                                    required
                                />
                                <div className={`select-dropdown ${!this.state.monthVisible && 'hidden'}`}>
                                    <ul className="select-results">
                                        <li className="select-result" onMouseDown={() => this.handleMonthSelect('01')}>
                                            01
                                        </li>
                                        <li className="select-result" onMouseDown={() => this.handleMonthSelect('02')}>
                                            02
                                        </li>
                                        <li className="select-result" onMouseDown={() => this.handleMonthSelect('03')}>
                                            03
                                        </li>
                                        <li className="select-result" onMouseDown={() => this.handleMonthSelect('04')}>
                                            04
                                        </li>
                                        <li className="select-result" onMouseDown={() => this.handleMonthSelect('05')}>
                                            05
                                        </li>
                                        <li className="select-result" onMouseDown={() => this.handleMonthSelect('06')}>
                                            06
                                        </li>
                                        <li className="select-result" onMouseDown={() => this.handleMonthSelect('07')}>
                                            07
                                        </li>
                                        <li className="select-result" onMouseDown={() => this.handleMonthSelect('08')}>
                                            08
                                        </li>
                                        <li className="select-result" onMouseDown={() => this.handleMonthSelect('09')}>
                                            09
                                        </li>
                                        <li className="select-result" onMouseDown={() => this.handleMonthSelect('10')}>
                                            10
                                        </li>
                                        <li className="select-result" onMouseDown={() => this.handleMonthSelect('11')}>
                                            11
                                        </li>
                                        <li className="select-result" onMouseDown={() => this.handleMonthSelect('12')}>
                                            12
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form-row text expiration">
                                <label className="expiration" htmlFor="expiration">Expiration Year</label>
                                <input
                                    id="expiration"
                                    name="expiration"
                                    onBlur={() => this.setState({ visible: false })}
                                    onFocus={() => this.setState({ visible: true })}
                                    onChange={() => {}}
                                    type="text"
                                    pattern="[0-9]*"
                                    placeholder="18"
                                    value={this.state.fields.expirationYear}
                                    required
                                />
                                <div className={`select-dropdown ${!this.state.visible && 'hidden'}`}>
                                    <ul className="select-results">
                                        {
                                            Array.apply(null, { length: 50 }).map(Number.call, Number)
                                                .map(i => {
                                                    let momentItem = moment().add(i, 'years').format('YYYY');
                                                    return (
                                                        <li className="select-result" key={i} onMouseDown={() => this.handleYearSelect(momentItem)}>
                                                            { momentItem }
                                                        </li>
                                                    )
                                                })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="form-row text security">
                                <label className="security" htmlFor="security">CCV Security Code</label>
                                <input
                                    id="security"
                                    name="security"
                                    type="text"
                                    placeholder="123"
                                    required
                                    onBlur={() => this.handleFieldBlur('cvc')}
                                    onChange={(e) => this.updateField('cvc', e)}
                                    value={this.state.fields.cvc}
                                    pattern="[0-9]*"
                                    className={`${this.state.missingValues['cvc'] ? 'missing-value' : ''}`}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="common-Button" data-dismiss="modal">Close</button>
                            <button type="button" className="common-Button common-Button--default" onClick={() => this.checkout()}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
