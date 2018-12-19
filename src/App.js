import React, { Component } from 'react';
import './App.css';
import NanoleafLayout from 'nanoleaf-layout/lib/NanoleafLayout';
import NanoleafData from './resources/data/nanoleafData';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import RocketSVG from "./components/RocketSVG/RocketSVG";

class App extends Component {
  constructor() {
      super();

      this.state = {
          data: NanoleafData
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
                            style={{ display: 'block', margin: 'auto'}}
                            data={this.state.data.panelSize['8']}
                            onClick={data => console.log('Clicked!', data)}
                            onHover={data => console.log('Hover', data)}
                            onExit={data => console.log('Exited Hover', data)}
                        />
                     </div>
                  </div>
              </div>
              {/* About Section */}
              <div className="row">
                  <div className="col-md-5 ml-3">
                      <h1 className="display-5 right"  id="about">About</h1>
                      <p className="common-body-text">
                          Nanoleaf Layout is the only package on NPM which takes your physical Nanoleaf layout and displays it in any 2D application.
                          Nanoleaf Layout will take in the confusing X,Y coordinates and Orientation that comes from Nanoleaf's OpenAPI and converts
                          it into a useful 2D graphic visual which you can use in your React application! Nanoleaf is a revolutionary smart lighting product which is fun and easy to use! It can be connected
                          into different patterns with varying effects and colors. Ultimately this library helps open up new doors that allow users to intuitively interact with their
                          Nanoleaf on a computer, phone, or tablet!
                      </p>
                  </div>
                  <div className="col-md-4 offset-md-1">
                      <div className="nanoleaf-container-md">
                          <NanoleafLayout
                            data={this.state.data.panelSize['4']}
                            strokeWidth={5}
                          />
                      </div>
                  </div>
              </div>
              {/* Examples */}
              <div className="row section-gray pt-3 pb-3">
                  <div className="col-md-7 offset-md-2">
                      <RocketSVG />
                      <h1 className="display-5" id="example">Examples</h1>
                      <p className="common-body-text center">
                          This section details some code examples and the output they return to help you understand all the features
                          Nanoleaf Layout has to offer. These examples include things like using props, handling errors, formatting data,
                          and hooking into events to help your experience with Nanoleaf Layout blast off!
                      </p>
                  </div>
              </div>
              {/* Example */}
              <div className="row section-gray">
                  <div className="col-md-2 offset-md-2">
                      <div className="nanoleaf-container-md">
                        <NanoleafLayout data={this.state.data.panelSize[2]}/>
                      </div>
                  </div>
                  <div className="col-md-4 offset-md-1">
                      <h1 className="display-6">Bare Minimum</h1>
                      <p className="common-body-text center">
                          This is a bare minimum example of a simple Nanoleaf Layout React Component using the only required
                          prop <code>data</code>.
                      </p>
                      <div className="code selected" data-language="javascript">
                        <pre className=" numbered  language-javascript">
                            <code className="language-javascript">
                                <span className="token keyword">var</span> stripe <span className="token operator">=</span> <span className="token function">Stripe</span>
                                <span className="token punctuation">(</span>
                                <span className="token string publishable-key" style={{pointerEvents: 'none'}}>'pk_test_TYooMQauvdEDq54NiTphI7jx'</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">;</span>
                                <span className="token keyword">var</span> elements
                                <span className="token operator">=</span> stripe
                                <span className="token punctuation">.</span>
                                <span className="token property" />
                                <span className="token function">elements</span>
                                <span className="token punctuation">(</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">;</span>
                            </code>
                            <span className="line-numbers">
                                <span></span>
                                <span></span>
                            </span>
                            <span className="line-numbers">
                                <span></span>
                                <span></span>
                            </span>
                        </pre>
                      </div>
                  </div>
              </div>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
