import React, { Component } from 'react';
import Logo from '../../resources/images/logo.png';

  export default class Footer extends Component {
    render() {
        return (
            <footer className="pt-4 pt-md-5 border-top">
                <div className="row pl-4">
                    <div className="col-12 col-md">
                        <img className="mb-2" src={Logo} alt="Triangle Logo" width="24" height="24" />
                        <small className="d-block mb-3 text-muted">© 2018-2019</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="https://github.com/cbartram/nanoleaf-layout">Github</a></li>
                            <li><a className="text-muted" href="#about">About</a></li>
                            <li><a className="text-muted" href="https://nanoleaf.me/en/">Nanoleaf</a></li>
                            <li><a className="text-muted" href="https://reactjs.org/">React Library</a></li>
                            <li><a className="text-muted" href="https://www.npmjs.com">NPM</a></li>
                            <li><a className="text-muted" href="#getting-started">Getting Started</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#examples">Documentation</a></li>
                            <li><a className="text-muted" href="#feedback">Feedback</a></li>
                            <li><a className="text-muted" href="https://github.com/cbartram/nanoleaf-layout/issues">Issues</a></li>
                            <li><a className="text-muted" href="https://github.com/cbartram/nanoleaf-layout/issues">Bugs</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#about">Team</a></li>
                            <li><a className="text-muted" href="#about">Locations</a></li>
                            <li><a className="text-muted" href="#about">Privacy</a></li>
                            <li><a className="text-muted" href="#about">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
  }
