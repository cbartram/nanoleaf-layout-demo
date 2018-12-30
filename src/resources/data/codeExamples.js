export const basicExample = `import NanoleafLayout from 'nanoleaf-layout/lib/NanoleafLayout';

export default class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
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
        />
    )
}`;

export const colorExample = `import NanoleafLayout from 'nanoleaf-layout/lib/NanoleafLayout';

export default class App extends Component {
  constructor() {
    super();
    this.state = { data }
  }
  
  render() {
    return (
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
    )
  }
`;

export const mappingExample = `let { positionData } = await (await fetch(...)).json();
      positionData = positionData.map(panel => ({ 
          ...panel, 
          color: '<YOUR_DESIRED_COLOR>', 
          strokeColor: '#ACFF01'
      }));`;

export const propsExample = `import NanoleafLayout from 'nanoleaf-layout/lib/NanoleafLayout';

export default class App extends Component {
  constructor() {
    super();
    this.state = { data }
  }
  
  render() {
    return (
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
        />
    )
}`;

export const eventExample = `import NanoleafLayout from "nanoleaf-layout/lib/nanoleaf-layout";
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
