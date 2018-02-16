import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (

      <div className="line">
        <div className="">
          <div className="footer-info">
            <h4>Find me</h4>
            <div className="footer-social">
              <ul>
                <li>
                  <a href="http://www.codepen.io/dapinitial" target="_blank">
                    <i className="fa fa-codepen"></i>
                  </a>
                </li>
                <li>
                  <a href="http://www.twitter.com/davidpuerto" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="http://www.instagram.com/dapinitial" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="http://www.linkedin.com/in/davidpuerto" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="http://www.github.com/dapinitial" target="_blank">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div className="footer-info">
            <h4>Contact info</h4>
            <ul className="footer-contacts">
              <li>
                <a href="tel://2063979040">
                  <i className="fa fa-phone"></i>
                  +1 (206) 397-9040</a>
              </li>
              <li>
                <a href="https://es.wikipedia.org/wiki/Seattle" target="_blank">
                  <i className="fa fa-motorcycle"></i>Seattle, WA 98121</a>
              </li>
              <li>
                <a href="mailto:me@davidpuerto.com">
                  <i className="fa fa-envelope-o"></i>
                  me@davidpuerto.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="to-top-holder">
          <div className="container">
            <p>
              <span>
                &copy; davidpuerto.com 2018.
              </span>
              All rights reserved.</p>
            <div className="to-top">
              <i className="fa fa-angle-double-up"></i>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Footer;
