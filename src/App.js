import React, { Component } from 'react';
import './App.css';
import NanoleafLayout from 'nanoleaf-layout/lib/NanoleafLayout';
import NanoleafData from './resources/data/nanoleafData';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import RocketSVG from "./components/RocketSVG/RocketSVG";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/styles/prism';


class App extends Component {
  constructor() {
      super();

      this.state = {
          data: NanoleafData
      }
  };
  render() {
      let codeString = `import NanoleafLayout from 'nanoleaf-layout/lib/NanoleafLayout';

<NanoleafLayout 
    data={{  
       numPanels:2,
       sideLength:150,
       positionData:[  
          {  
             panelId:107,
             x:-74,
             y:43,
             o:180
          },
          {  
             panelId:114,
             x:-149,
             y:0,
             o:360
          }
       ]
    }} 
/>`;

      let colorExample = `import NanoleafLayout from 'nanoleaf-layout/lib/NanoleafLayout';

<NanoleafLayout
    data={{
          numPanels: 10,
          sideLength: 150,
          positionData: [{
              panelId: 1,
              x: 100,
              y: 100,
              o: 0,
              color: '#408af8',
              strokeColor: '#00ff00'
          }, {
              panelId: 2,
              x: 25,
              y: -29,
              o: 240,
              color: 'blue',
              strokeColor: '#00ff00'
          }, {
              panelId: 3,
              x: 174,
              y: -29,
              o: 120,
              color: '#3ecf8e',
              strokeColor: '#00ff00'
          }, {
              panelId: 4,
              x: 99,
              y: 13,
              o: 180,
              color: '#d7fafc'
          }, {
              panelId: 5,
              x: 99,
              y: -159,
              o: 0,
              color: '#6B7C93'
          }, {
              panelId: 6,
              x: 25,
              y: -116,
              o: 60,
              color: '#6772e5'
          }]
      }}
/>`;

      let mappingExample = `let { positionData } = await (await fetch(...)).json();
      positionData = positionData.map(panel => ({ 
          ...panel, 
          color: '<YOUR_DESIRED_COLOR>', 
          strokeColor: '#ACFF01'
      }));`;

      let propsExample = `import NanoleafLayout from 'nanoleaf-layout/lib/NanoleafLayout';

<NanoleafLayout
    strokeWidth={10} 
     // Shows transformations and rotations
    development={true}
    // Style the enclosing SVG with a drop shadow
    svgStyle={{
        color: '#6b7c93',
        boxShadow: '0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3)',
        borderRadius: 8,
    }}
    data={{
            numPanels: 10,
            sideLength: 150,
            positionData: [{  
               panelId:1,
               x:100,
               y:100,
               o:60
            }, {  
               panelId:2,
               x:324,
               y:56,
               o:0
            }, {  
               panelId:3,
               x:249,
               y:-159,
               o:60
            }, {  
               panelId:4,
               x:174,
               y:56,
               o:240
            }, {  
               panelId:5,
               x:324,
               y:-29,
               o:60
            }, {  
               panelId:6,
               x:-49,
               y:100,
               o:60
            },{  
               panelId:7,
               x:399,
               y:99,
               o:300
            }, {  
               panelId:8,
               x:174,
               y:-29,
               o:60
            }, {  
               panelId:9,
               x:25,
               y:56,
               o:120
            }, {  
               panelId:10,
               x:249,
               y:-73,
               o:240
            }]
        }}
/>`;

      let eventExample = `import NanoleafLayout from "nanoleaf-layout/lib/nanoleaf-layout";
import React, { Component } from 'react';

let data = {
    numPanels: 10,
    sideLength: 150,
    positionData: [{
        panelId: 1,
        x: 100,
        y: 100,
        o: 0,
        color: '#3ECF8E'
    }, {
        panelId: 2,
        x: 25,
        y: -29,
        o: 240,
        color: '#3ECF8E'
    }, {
        panelId: 3,
        x: 174,
        y: -29,
        o: 120,
        color: '#3ECF8E'
    }, {
        panelId: 4,
        x: 99,
        y: 13,
        o: 180,
        color: '#3ECF8E'
    }]
};

export default class App extends Component {
  constructor() {
    super();
    this.state = { data }
  }
  
  render() {
    return (
      <NanoleafLayout
        data={data}
        onClick={({ panelId }) => {
            panelId === 4 ? 
            alert('Panel 4 has been clicked!') : 
            alert('Wrong Panel Clicked Try Clicking #4');
        }}
        onExit={() => {
            let { positionData } = this.state.data;

            // Convert all panels back to green
            let panelToChange = positionData
                .map(panel => {
                    return {
                        ...panel,
                        color: '#3ECF8E'
                    }
            });
            positionData = [...panelToChange];
            this.setState({
                data: {
                    panelSize
                }
            });
              }}
          onHover={({ panelId }) => {
            let { positionData } = this.state.data;

            // A Single Panel being hovered over
            let panelToChange = positionData
                .filter(panel => panel.panelId === panelId)[0];
                
            // All the other panels    
            let otherPanels = positionData
                .filter(panel => panel.panelId !== panelId)
                .map(panel => {
                    // Set all other panels to green
                    return {
                        ...panel,
                        color: '#3ECF8E'
                    }
                });
                
            // Update the hovered panel to blue   
            panelToChange.color = '#70e6ff';
            positionData = [...otherPanels, panelToChange];
            
            // Update our applications state!
            this.setState({ positionData })
      />
    );
  }
}`;

    return (
      <div className="container-fluid">
          <Navbar/>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="getting-started">
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
          </div>
              {/* About Section */}
              <div className="row section-gray pt-3 pb-3">
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
                            strokeColor={'#f6f9fc'}
                          />
                      </div>
                  </div>
              </div>
              {/* Examples */}
              <div className="row pt-3 pb-3">
                  <div className="col-md-7 offset-md-2">
                      <div className="d-flex flex-column justify-content-center">
                          <RocketSVG />
                          <div className="d-flex justify-content-center">
                          <h1 className="display-5" id="example">Examples</h1>
                          </div>
                          <p className="common-body-text center">
                              This section details some code examples and the output they return to help you understand all the features
                              Nanoleaf Layout has to offer. These examples include things like using props, handling errors, formatting data,
                              and hooking into events to help your experience with Nanoleaf Layout blast off!
                          </p>
                      </div>
                  </div>
              </div>
              {/* Example */}
              <div className="row">
                  <div className="col-md-2 offset-md-2 pt-4">
                      <div className="nanoleaf-container-md">
                        <NanoleafLayout data={this.state.data.panelSize[2]}/>
                      </div>
                  </div>
                  <div className="col-md-5 offset-md-1">
                      <h1 className="display-6">Bare Minimum</h1>
                      <p className="common-body-text right">
                          This is a bare minimum example of a simple Nanoleaf Layout React Component using the only required
                          prop <code>data</code>.
                      </p>
                      <SyntaxHighlighter
                          language='javascript'
                          customStyle={{
                              borderRadius: 5,
                              backgroundColor: '#f7f8f9',
                              padding: '11px 14px 11px 14px',
                              color: '#424770',
                              fontFamily: 'Source Code Pro,Consolas,Menlo,monospace'
                          }}
                          lineNumberStyle={{
                            fontSize: '13px',
                            color: '#bec5ca'
                          }}
                          style={coy}
                          showLineNumbers
                          startingLineNumber={1}
                      >
                          {codeString}
                      </SyntaxHighlighter>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-2 offset-md-2 pt-4">
                      <div className="nanoleaf-container-md">
                          <NanoleafLayout
                              data={{
                                  numPanels: 10,
                                  sideLength: 150,
                                  positionData: [{
                                      panelId: 1,
                                      x: 100,
                                      y: 100,
                                      o: 0,
                                      color: '#408af8',
                                      strokeColor: '#00ff00'
                                  }, {
                                      panelId: 2,
                                      x: 25,
                                      y: -29,
                                      o: 240,
                                      color: 'blue',
                                      strokeColor: '#00ff00'
                                  }, {
                                      panelId: 3,
                                      x: 174,
                                      y: -29,
                                      o: 120,
                                      color: '#3ecf8e',
                                      strokeColor: '#00ff00'
                                  }, {
                                      panelId: 4,
                                      x: 99,
                                      y: 13,
                                      o: 180,
                                      color: '#d7fafc'
                                  }, {
                                      panelId: 5,
                                      x: 99,
                                      y: -159,
                                      o: 0,
                                      color: '#6B7C93'
                                  }, {
                                      panelId: 6,
                                      x: 25,
                                      y: -116,
                                      o: 60,
                                      color: '#6772e5'
                                  }]
                              }}
                          />
                      </div>
                  </div>
                  <div className="col-md-5 offset-md-1">
                      <h1 className="display-6">Panel Color and Stroke Color</h1>
                      <p className="common-body-text right">
                          This example details how to control each panel's color and stroke color individually. Normally the
                          Nanoleaf OpenAPI does not return color's for each panel however, by mapping over each panel in the array you
                          can easily add a <code>color</code> property!
                      </p>
                      <SyntaxHighlighter
                          language='javascript'
                          customStyle={{
                              borderRadius: 5,
                              backgroundColor: '#f7f8f9',
                              padding: '11px 14px 11px 14px',
                              color: '#424770',
                              fontFamily: 'Source Code Pro,Consolas,Menlo,monospace'
                          }}
                          lineNumberStyle={{
                              fontSize: '13px',
                              color: '#bec5ca'
                          }}
                          style={coy}
                          showLineNumbers
                          startingLineNumber={1}
                      >
                          {mappingExample}
                      </SyntaxHighlighter>
                      <SyntaxHighlighter
                          language='javascript'
                          customStyle={{
                              borderRadius: 5,
                              backgroundColor: '#f7f8f9',
                              padding: '11px 14px 11px 14px',
                              color: '#424770',
                              fontFamily: 'Source Code Pro,Consolas,Menlo,monospace'
                          }}
                          lineNumberStyle={{
                              fontSize: '13px',
                              color: '#bec5ca'
                          }}
                          style={coy}
                          showLineNumbers
                          startingLineNumber={1}
                      >
                          {colorExample}
                      </SyntaxHighlighter>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-2 offset-md-2 pt-4">
                      <div className="nanoleaf-container-md">
                          <NanoleafLayout
                              strokeWidth={10}
                              development
                              svgStyle={{
                                  color: '#6b7c93',
                                  boxShadow: '0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3)',
                                  borderRadius: 8,
                              }}
                              data={this.state.data.panelSize[10]}
                          />
                      </div>
                  </div>
                  <div className="col-md-5 offset-md-1">
                      <h1 className="display-6">Using Nanoleaf Props</h1>
                      <p className="common-body-text right">
                          There are a few additional props that Nanoleaf Layout provides
                          to help you customize and tweak the layout to suite your needs. The following example
                          demonstrates the use of the <code>svgStyle</code>,&nbsp;<code>strokeWidth</code>, and <code>development</code>&nbsp;
                          props.
                      </p>
                      <SyntaxHighlighter
                          language='javascript'
                          customStyle={{
                              borderRadius: 5,
                              backgroundColor: '#f7f8f9',
                              padding: '11px 14px 11px 14px',
                              color: '#424770',
                              fontFamily: 'Source Code Pro,Consolas,Menlo,monospace'
                          }}
                          lineNumberStyle={{
                              fontSize: '13px',
                              color: '#bec5ca'
                          }}
                          style={coy}
                          showLineNumbers
                          startingLineNumber={1}
                      >
                          {propsExample}
                      </SyntaxHighlighter>
                  </div>
              </div>
          <div className="row">
              <div className="col-md-2 offset-md-2 pt-4">
                  <div className="nanoleaf-container-md">
                      <NanoleafLayout
                          data={this.state.data.panelSize[4]}
                          onClick={({ panelId }) => {
                              panelId === 4 ? alert('You clicked panel #4!') : alert('Thats not the right panel try again!');
                          }}
                          onExit={() => {
                            let panelSize = this.state.data.panelSize;

                            // Convert them all back to green
                            let panelToChange = panelSize['4'].positionData.map(panel => {
                                return {
                                    ...panel,
                                    color: '#3ECF8E'
                                }
                            });

                            panelSize['4'].positionData = [...panelToChange];

                            this.setState({
                                data: {
                                    panelSize
                                }
                            });
                          }}
                          onHover={({ panelId }) => {
                            let panelSize  = this.state.data.panelSize;

                            let panelToChange = panelSize['4'].positionData.filter(panel => panel.panelId === panelId)[0];
                            let otherPanels = panelSize['4'].positionData.filter(panel => panel.panelId !== panelId).map(panel => {
                                return {
                                    ...panel,
                                    color: '#3ECF8E'
                                }
                            });
                            panelToChange.color = '#70e6ff';
                            panelSize['4'].positionData = [...otherPanels, panelToChange];
                             this.setState({
                                 data: {
                                     panelSize
                                 }
                             })
                          }}
                      />
                  </div>
              </div>
              <div className="col-md-5 offset-md-1">
                  <h1 className="display-6">Callbacks and Events</h1>
                  <p className="common-body-text right">
                      This example demonstrates how to use the Nanoleaf's built in callback system to hook into events
                      such as <code>onClick()</code>, <code>onHover()</code>, and <code>onExit()</code>. With these events
                      you can program a more interactive Nanoleaf Layout for your users try it yourself in the example to the left!
                      Events are new in version 2.0.0 of Nanoleaf Layout. You can get the latest version by running <code>npm install nanoleaf-layout@latest</code>
                  </p>
                  <SyntaxHighlighter
                      language='javascript'
                      customStyle={{
                          borderRadius: 5,
                          backgroundColor: '#f7f8f9',
                          padding: '11px 14px 11px 14px',
                          color: '#424770',
                          fontFamily: 'Source Code Pro,Consolas,Menlo,monospace'
                      }}
                      lineNumberStyle={{
                          fontSize: '13px',
                          color: '#bec5ca'
                      }}
                      style={coy}
                      showLineNumbers
                      startingLineNumber={1}
                  >
                      {eventExample}
                  </SyntaxHighlighter>
              </div>
          </div>
          {/* Support Section */}
          <div className="row section-gray pl-5" id="support">
              <div className="col-md-4 offset-md-2">
                  <h1 className="title">
                    <span className="subtitle">
                      Need Help
                    </span>
                      Get in touch or submit a bug.
                  </h1>
              </div>
              <div className="col-md-4">
                  <div className="d-flex flex-row justify-content-space-between align-items-center">
                      <a className="common-Button common-Button--default m-3">Contact Us <span className="fas fa-phone" /></a>
                      <a href="https://github.com/cbartram/nanoleaf-layout/issues" className="common-Button m-3">Submit a Bug <span className="fab fa-github" /></a>
                  </div>
              </div>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
