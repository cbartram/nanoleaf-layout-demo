import React, { Component } from 'react';
import Logo from '../../resources/images/logo.png';

  export default class Footer extends Component {
    render() {
        return (
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row pl-4">
                    <div className="col-12 col-md">
                        <img className="mb-2" src={Logo} alt="Triangle Logo" width="24" height="24" />
                        <small className="d-block mb-3 text-muted">© 2018-2019</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Github</a></li>
                            <li><a className="text-muted" href="#">About</a></li>
                            <li><a className="text-muted" href="#">Nanoleaf</a></li>
                            <li><a className="text-muted" href="#">React Library</a></li>
                            <li><a className="text-muted" href="#">NPM</a></li>
                            <li><a className="text-muted" href="#">Getting Started</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Documentation</a></li>
                            <li><a className="text-muted" href="#">Feedback</a></li>
                            <li><a className="text-muted" href="#">Issues</a></li>
                            <li><a className="text-muted" href="#">Bugs</a></li>
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
        )
    }
  }
