import React, { Component } from 'react';
import './App.css';
import NanoleafLayout from 'nanoleaf-layout/lib/NanoleafLayout';

class App extends Component {
  constructor() {
      super();

      this.state = {
         nanoleafData: {
             sideLength: 150,
             numPanels: 2,
             positionData: [
                 {
                     panelId: 107,
                     x: -74,
                     y: 43,
                     o: 180
                 },
                 {
                     panelId: 114,
                     x: -149,
                     y: 0,
                     o: 360
                 }
             ]
         }
      }
  };
  render() {
    return (
      <div>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm fixed">
              <h5 className="my-0 mr-md-auto font-weight-normal">Nanoleaf Layout</h5>
              <nav className="my-2 my-md-0 mr-md-3">
                  <a className="p-2 text-dark" href="#about">About</a>
                  <a className="p-2 text-dark" href="#examples">Examples</a>
                  <a className="p-2 text-dark" href="#support">Support</a>
                  <a className="p-2 text-dark" href="#github">Github</a>
                  <a className="p-2 text-dark" href="#">Sponsor</a>
              </nav>
          </div>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h1 className="display-4" id="about">Nanoleaf Layout</h1>
              <p className="lead">Quickly show a visual representation of the physical nanoleaf layout for your users!</p>

              <div className="row">
                  <div className="col-md-3 offset-md-3">
                    <NanoleafLayout data={this.state.nanoleafData} />
                  </div>
              </div>
          </div>
          <footer className="pt-4 my-md-5 pt-md-5 border-top">
              <div className="row">
                  <div className="col-12 col-md">
                      <img className="mb-2" src="../../assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
                          <small className="d-block mb-3 text-muted">© 2017-2018</small>
                  </div>
                  <div className="col-6 col-md">
                      <h5>Features</h5>
                      <ul className="list-unstyled text-small">
                          <li><a className="text-muted" href="#">Cool stuff</a></li>
                          <li><a className="text-muted" href="#">Random feature</a></li>
                          <li><a className="text-muted" href="#">Team feature</a></li>
                          <li><a className="text-muted" href="#">Stuff for developers</a></li>
                          <li><a className="text-muted" href="#">Another one</a></li>
                          <li><a className="text-muted" href="#">Last time</a></li>
                      </ul>
                  </div>
                  <div className="col-6 col-md">
                      <h5>Resources</h5>
                      <ul className="list-unstyled text-small">
                          <li><a className="text-muted" href="#">Resource</a></li>
                          <li><a className="text-muted" href="#">Resource name</a></li>
                          <li><a className="text-muted" href="#">Another resource</a></li>
                          <li><a className="text-muted" href="#">Final resource</a></li>
                      </ul>
                  </div>
                  <div className="col-6 col-md">
                      <h5>About</h5>
                      <ul className="list-unstyled text-small">
                          <li><a className="text-muted" href="#">Team</a></li>
                          <li><a className="text-muted" href="#">Locations</a></li>
                          <li><a className="text-muted" href="#">Privacy</a></li>
                          <li><a className="text-muted" href="#">Terms</a></li>
                      </ul>
                  </div>
              </div>
          </footer>
      </div>
    );
  }
}

export default App;
