import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Home.css';
import Clock from './Clock';
import About from './About.js';
import Contact from './Contact.js';
import Blog from './Blog.js';
import Projects from './Projects.js';
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
            <div className='menuContainer'>

              <div className='sectionLinks'>
                <Link onClick={this.handleClick} to='/about'>about</Link>
              </div>
              <div className='sectionLinks'>
                <Link onClick={this.handleClick} to='/blog'>
                  blog</Link>
              </div>
              <div className='sectionLinks'>
                <Link onClick={this.handleClick} to='/projects'>
                  projects</Link>
              </div>
              <div className='sectionLinks'>
                <Link onClick={this.handleClick} to='/contact'>
                  contact</Link>
              </div>
            </div>

            <div className='mainSectionContainer'>
              <Route path="/about" component={About}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/contact" component={Contact}/>
            </div>

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
