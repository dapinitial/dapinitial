import React, {Component} from 'react';
// import Clock from '../Clock/Clock.js';

class HeroTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="hero-title">
        <div className="hero-wrap">
          <h3>David Anthony Puerto</h3>
          <h4>
            <span className="custom-scroll-link">Experience Designs
              <span className="color">&nbsp;&amp;&nbsp;</span>
              User Interfaces Develop</span>
          </h4>
        </div>
        {/* <Clock deadline={this.state.deadline}/> */}
      </div>
    )
  }
}

export default HeroTitle;