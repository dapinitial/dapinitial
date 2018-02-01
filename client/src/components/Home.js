import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Home.css';
import Clock from './Clock';
// import About from './About.js'; import Contact from './Contact.js'; import
// Blog from './Blog.js'; import Projects from './Projects.js';
import {Power4, TweenLite} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Footer from './Footer.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
    // prevent page refresh (ie 9) e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
    TweenLite.to(window, 1, {
      scrollTo: {
        y: '.mainSectionContainer',
        autoKill: false,
        autoRound: false,
        force3D: true
      },
      ease: Power4.easeOut
    });
  }

  render() {
    return (
      <Router>
        <div>
          <div className='wrapper'>

            <div
              className='homeContainer full-section full-screen dark-section parallax'
              data-stellar-background-ratio='0.1'>
              <div className="full-section-container">
                <Clock deadline={this.state.deadline}/>
              </div>
              <div
                className='homeContainerPattern full-section-pattern parallax'
                data-stellar-background-ratio='0.1'>
                <div className='header'>
                  <Link className='nameLink' to='/home'></Link>
                </div>
              </div>
            </div>
            <div className='menuBlock'></div>
            <div className='menuContainer'></div>

            <div className='mainSectionContainer'></div>

            <div className="go-next-section">
              <Link onClick={this.handleClick} to='/about'>
                <i className="fa fa-angle-down"></i>
                <i className="fa fa-angle-down"></i>
                <i className="fa fa-angle-down"></i>
                <i className="fa fa-angle-down"></i>
              </Link>
            </div>

          </div>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default Home;
