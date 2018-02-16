import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class HeaderNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reveal: false
    };

  }

  render() {
    return (
      <div
        className={this.props.reveal
        ? "nav-inner vismen"
        : "nav-inner"}>
        <div className="nav-decor nav-decor-tl"></div>
        <div className="nav-decor nav-decor-br"></div>
        <div className="overlay"></div>
        <nav style={{
          marginTop: -87 + 'px'
        }}>
          <ul>
            <li>
              <Link onClick={this.handleClick} to='/about'>About</Link>
            </li>
            <li>
              <Link onClick={this.handleClick} to='/blog'>Blog</Link>
            </li>
            <li className="subnav">
              <a href="/folio">Folio<i className="fa fa-angle-double-down subnavicon"></i>
              </a>
              <ul className="hidden">
                <li>
                  <a href="/folio-facebook" className="custom-scroll-link">Facebook<i className="fa fa-angle-double-down subnavicon"></i>
                  </a>
                </li>
                <li>
                  <a href="/folio-sonosite" className="custom-scroll-link">SonoSite<i className="fa fa-angle-double-down subnavicon"></i>
                  </a>
                </li>
                <li>
                  <a href="/folio-zillow" className="custom-scroll-link">Zillow<i className="fa fa-angle-double-down subnavicon"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link onClick={this.handleClick} to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default HeaderNav;
