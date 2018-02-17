import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
// import Clock from '../Clock/Clock';
import About from '../About/About.js';
import Blog from '../Blog/Blog.js';
import Folio from '../Folio/Folio.js';
import Contact from '../Contact/Contact.js';
import HeroTitle from '../HeroTitle/HeroTitle.js';
import '../../images/d.svg';
import {Power4, TweenLite} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: 'https://www.youtube.com/watch?v=dVkK36KOcqs'
    };
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
        <div className="wrapper">
          <div className='hero-wrapper'>
            <div className=''>
              <div className='full-section-container'>
                <div className='player-wrapper'>
                  <ReactPlayer
                    className="react-player"
                    width='100%'
                    height='100%'
                    url={this.state.videoURL}
                    playing
                    muted
                    loop/>
                </div>
                <div className='go-next-section'>
                  <Link onClick={this.handleClick} to='/about'>
                    <i className='fa fa-angle-down'></i>
                    <i className='fa fa-angle-down'></i>
                    <i className='fa fa-angle-down'></i>
                    <i className='fa fa-angle-down'></i>
                  </Link>
                </div>
                <HeroTitle/> {/* <Clock deadline={this.state.deadline}/> */}
              </div>
            </div>
            <Route path='/about' component={About}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/folio' component={Folio}/>
            <Route path='/contact' component={Contact}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default Home;