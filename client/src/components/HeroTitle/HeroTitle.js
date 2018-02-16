import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Power4, TweenLite} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

class HeroTitle extends Component {

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
      <div className="hero-title">
        <div className="hero-wrap skrollable skrollable-between">
          <h3>David Anthony Puerto</h3>
          <div className="clearfix"></div>
          <h4>
            <Link onClick={this.handleClick} to='/about#about'>
              <span className="custom-scroll-link">Experience Designs
                <span className="color">&nbsp;&amp;&nbsp;</span>
                User Interfaces Develop</span>
            </Link>
          </h4>
        </div>
      </div>
    )
  }
}

export default HeroTitle;