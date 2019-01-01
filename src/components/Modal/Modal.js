import React, { Component } from 'react';
import moment from 'moment';
import './Modal.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false, // Is the dropdown for the expiration year visible?
            monthVisible: false, // Is the dropdown for the expiration month visible?
            fields: {
                firstName: '',
                lastName: '',
                creditCard: '',
                expirationMonth: '',
                expirationYear: '',
                cvc: '',
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
        const value = e.target.value;
        const valid = e.target.validity.valid || value.length === 0;
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
      console.log('Blurred');
      if(this.state.fields[fieldName].length === 0) {
          this.setState({
              missingValues: {
                  ...this.state.missingValues,
                  [fieldName]: true,
              }
          })
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
                                                    let momentItem = moment().subtract(i, 'years').format('YYYY');
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
                            <button type="button" className="common-Button common-Button--default" onClick={() => alert('This feature is not yet implemented try again later!')}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
