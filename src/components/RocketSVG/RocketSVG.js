import React, { Component } from 'react';
import './RocketSVGStyle.css';

export default class RocketSVG extends Component {
  constructor() {
      super();

      this.state = {
          flameRotation: 'scale(.91, .93)',
          circles: [],
      }
  }

  componentDidMount() {
      // Handles the Flame animating at the end of the rocket
      setInterval(() => {
          this.setState({
              flameRotation: `scale(${Math.random() * (1 - 0.8) + 0.8}, ${Math.random() * (1 - 0.75) + 0.75})`
          });
      }, 100);

      // setInterval(() => {
      //     const { circles } = this.state;
      //     circles.push({
      //             fillOpacity: '',
      //             radius: Math.random() * (1.1 - 0.2) + 0.2, // [1.1, .2]
      //             cx: '',
      //             cy: '',
      //     });
      // }, 500);
  }

    render() {
    return (
        <div className="d-flex justify-content-center">
        <svg id="rocket-icon" viewBox="0 0 75 75">
            <circle r="0.8427646435858045" cx="72.93964103630971" cy="25.388473334258148" fill="#AAB7C4"
                    fillOpacity="0.03321566147217462" />
            <circle r="1.117091671828614" cx="66.85047768453374" cy="54.85095311823642" fill="#AAB7C4"
                    fillOpacity="0.19328940337054923" />
            <circle r="0.767863200921622" cx="63.520176059707865" cy="49.5555707025003" fill="#AAB7C4"
                    fillOpacity="0.2916236754198105" />
            <circle r="0.33776675044071697" cx="59.32300012752751" cy="36.188215175007564" fill="#AAB7C4"
                    fillOpacity="0.41276402898132303" />
            <circle r="0.9327220750144778" cx="51.46812528059661" cy="14.043759418049284" fill="#AAB7C4"
                    fillOpacity="0.6180157213437937" />
            <circle r="0.4492392901894387" cx="43.52859672170807" cy="61.335790813532626" fill="#AAB7C4"
                    fillOpacity="0.8372881796159243" />
            <circle r="1.0504511001984587" cx="38.75058146219085" cy="10.000004282038754" fill="#AAB7C4"
                    fillOpacity="0.9656900702494658" />
            <circle r="0.22410309202800965" cx="33.05891454051701" cy="70.85143627751522" fill="#AAB7C4"
                    fillOpacity="0.8808590583226663" />
            <circle r="1.1269803224306842" cx="27.8544012470187" cy="39.98776375561521" fill="#AAB7C4"
                    fillOpacity="0.7348144630694604" />
            <circle r="0.3374141841383392" cx="17.918826090392997" cy="26.205958855810966" fill="#AAB7C4"
                    fillOpacity="0.47309441795491525" />
            <circle r="0.5488792838352285" cx="18.834563880163238" cy="71.3914889374521" fill="#AAB7C4"
                    fillOpacity="0.4948614342928084" />
            <circle r="0.8777949247574319" cx="10.142404824139732" cy="52.06308618263782" fill="#AAB7C4"
                    fillOpacity="0.252977937301907" />
            <circle r="0.5894844538171464" cx="5.54500972499909" cy="23.343604841894923" fill="#AAB7C4"
                    fillOpacity="0.13425781780212565" />
            <circle r="0.47546633811737476" cx="0.9572206586204572" cy="49.93326672121721" fill="#AAB7C4"
                    fillOpacity="0.013011759308100501" />
            <polygon fill="#68D4F8" points="18 21 35 21 44 30 27 30" />
            <polygon fill="#68D4F8" points="27 45 44 45 35 54 18 54" />
            <path fill="#68D4F8"
                  d="M30.94 47.7c-3.79-.93-6.98-2.35-9.25-4.07a14.88 14.88 0 0 0 0-12.26c2.27-1.72 5.46-3.14 9.25-4.08A14.72 14.72 0 0 1 35 37.5c0 3.98-1.55 7.59-4.06 10.2z" />
            <path fill="#8DDEF9"
                  d="M30.94 27.3c-3.79.93-6.98 2.35-9.25 4.07.84 1.86 1.31 3.94 1.31 6.13h12c0-3.98-1.55-7.59-4.06-10.2z" />
            <path fill="#68D4F8"
                  d="M57.06 30.13C62.5 33.1 66 36.73 66 37.5c0 .77-3.49 4.4-8.94 7.37A14.83 14.83 0 0 0 59 37.5c0-2.7-.7-5.21-1.94-7.37z" />
            <path fill="#8DDEF9"
                  d="M57.06 30.13C62.5 33.1 66 36.73 66 37.5h-7c0-2.7-.7-5.21-1.94-7.37z" />
            <path fill="#ECFAFF"
                  d="M57.06 44.87C52.94 47.12 47.7 49 42 49c-3.99 0-7.75-.47-11.06-1.3A14.72 14.72 0 0 0 35 37.5c0-3.98-1.55-7.59-4.06-10.2C34.25 26.46 38.01 26 42 26c5.7 0 10.94 1.88 15.06 4.13A14.83 14.83 0 0 1 59 37.5c0 2.7-.7 5.21-1.94 7.37z" />
            <path fill="#FCFEFF"
                  d="M57.06 30.13C52.94 27.88 47.7 26 42 26c-3.99 0-7.75.47-11.06 1.3A14.72 14.72 0 0 1 35 37.5h24c0-2.7-.7-5.21-1.94-7.37z" />
            <circle cx="49.5" cy="37.5" r="3.5" fill="#68D4F8" />
            <path fill="#8DDEF9" d="M46 37.5h7a3.5 3.5 0 0 0-7 0z" />
            <path fill="#68D4F8" d="M21 37.5c0-10.04-11 0-12 0 1 0 12 10.04 12 0z" className="flame" style={{ transform: this.state.flameRotation }} />
        </svg>
        </div>
    )
  }
}
