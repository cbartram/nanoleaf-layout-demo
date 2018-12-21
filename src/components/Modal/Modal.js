import React, { Component } from 'react';
  import './Modal.css';

export default class Modal extends Component {
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
                              <input id="firstname" name="firstname" type="text" placeholder="Jürgen" required="" />
                          </div>
                          <div className="form-row text lastname">
                              <label className="lastname" htmlFor="lastname">Your last name</label>
                              <input id="lastname" name="lastname" type="text" placeholder="Windcaller" required="" />
                          </div>
                          <div className="form-row text cc">
                              <label className="lastname" htmlFor="cc">Credit Card Number</label>
                              <input id="cc" name="cc" type="text" placeholder="4444 4444 4444 4444" required="" />
                          </div>
                          <div className="form-row text expiration">
                              <label className="expiration" htmlFor="expiration">Expiration Date</label>
                              <input id="expiration" name="expiration" type="text" placeholder="08/12" required="" />
                          </div>
                          <div className="form-row text security">
                              <label className="security" htmlFor="security">CCV Security Code</label>
                              <input id="security" name="security" type="text" placeholder="123" required="" />
                          </div>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="common-Button" data-dismiss="modal">Close</button>
                          <button type="button" className="common-Button common-Button--default">Save changes</button>
                      </div>
                  </div>
              </div>
          </div>
      )
  }
}
