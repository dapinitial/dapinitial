import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="footer-info">
            <h4>Find me</h4>
            <div className="footer-social">
              <ul>
                <li>
                  <a
                    href="http://www.linkedin.com/in/davidpuerto"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.github.com/dapinitial"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.codepen.io/dapinitial"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-codepen"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.dribbble.com/davidpuerto"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.instagram.com/dapinitial"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-info">
            <h4>Contact info</h4>
            <ul className="footer-contacts">
              <li>
                <a href="tel://2063979040">
                  <i className="fa fa-phone"></i>
                  +1 (206) 397-9040</a>
              </li>
              <li>
                <a
                  href="https://es.wikipedia.org/wiki/Seattle"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa fa-motorcycle"></i>P.Square Seattle, WA 98104</a>
              </li>
              <li>
                <a href="mailto:me@davidpuerto.com">
                  <i className="fa fa-envelope"></i>
                  me@davidpuerto.com</a>
              </li>
            </ul>
          </div>
          <div className="to-top-holder">
            <div className="container">
              <p>
                <span>
                  &copy; davidpuerto.com 2018.
                </span>
                &nbsp; All rights reserved.</p>
              <div className="to-top">
                <i className="fa fa-angle-double-up"></i>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
