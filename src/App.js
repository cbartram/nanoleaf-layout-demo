import React, { Component } from 'react';
import './App.css';
import NanoleafLayout from 'nanoleaf-layout/lib/NanoleafLayout';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor() {
      super();

      this.state = {
          nanoleafData: {
              numPanels: 10,
              sideLength: 150,
              positionData: [{
                  panelId: 1,
                  x: 100,
                  y: 100,
                  o: 60,
                  color: '#6772E5'
              }, {
                  panelId: 2,
                  x: 324,
                  y: 56,
                  o: 0,
                  color: '#6772E5'
              }, {
                  panelId: 3,
                  x: 249,
                  y: -159,
                  o: 60,
                  color: '#6772E5'
              }, {
                  panelId: 4,
                  x: 174,
                  y: 56,
                  o: 240,
                  color: '#6772E5'
              }, {
                  panelId: 5,
                  x: 324,
                  y: -29,
                  o: 60,
                  color: '#6772E5'
              }, {
                  panelId: 7,
                  x: 399,
                  y: 99,
                  o: 300,
                  color: '#6772E5'
              }, {
                  panelId: 8,
                  x: 174,
                  y: -29,
                  o: 60,
                  color: '#6772E5'
              }, {
                  panelId: 10,
                  x: 249,
                  y: -73,
                  o: 240,
                  color: '#6772E5'
              }]
          }
      }
  };
  render() {
    return (
      <div className="container-fluid">
          <Navbar/>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h1 className="display-4">Nanoleaf Layout</h1>
              <p className="lead">Instantly show a real time visual representation of a physical Nanoleaf structure on the web.</p>
              <div className="row">
                  <div className="d-flex justify-content-center">
                     <div className="nanoleaf-container-md">
                        <NanoleafLayout
                            data={this.state.nanoleafData}
                            onClick={data => console.log('Clicked!', data)}
                            onHover={data => console.log('Hover', data)}
                            onExit={data => console.log('Exited Hover', data)}
                        />
                     </div>
                  </div>
              </div>
              {/* About Section */}
              <div className="row">
                  <div className="col-md-5">
                      <h1 className="display-5" id="about">About</h1>
                      <p className="common-body-text">
                          Stripe builds the most powerful and flexible tools for internet commerce. Whether you’re
                          creating a subscription service, an on-demand marketplace, an e-commerce store, or a
                          crowdfunding platform, Stripe’s meticulously designed APIs and unmatched functionality help
                          you create the best possible product for your users. Millions of the world’s most innovative
                          technology companies are scaling faster and more efficiently by building their businesses on
                          Stripe.
                      </p>
                  </div>
              </div>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
