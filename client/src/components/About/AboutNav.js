import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class AboutNav extends Component {
  render() {
    return (
      <div className="scroll-nav-holder">
        <nav className="scroll-nav">
          <ul>
            <li>
              <Link to="#sec1" data-bgtex="about" className="act-link scroll-link">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link className="scroll-link" to="#sec2" data-bgtex="resume">
                <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link className="scroll-link" to="#sec3" data-bgtex="awards">
                <span>Awards</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default AboutNav;