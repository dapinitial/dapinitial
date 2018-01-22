import React, {Component} from 'react';
import './About.css';
import Subnav from './Subnav.js';

class About extends Component {
  render() {
    return (
      <div>
        <Subnav section='about'/>
        <div className='sectionContainer'>
          <div className="headline">
            <h2>About
              <br/>
              Me</h2>
          </div>
          <p>BORN, Hasn't died, yet. "From Ketucky well-water to whale watching off my
            backporch," I'm not originally from Kentucky but I'm down with the unbridled
            spirit. I like scars, marks, and prison tattoos. Runaways, gypsies, military
            brats, the homeless, victims of violence. If you don't realm here, that's okay,
            we likely won't be lasting friends unless you're hot and flirty. You're welcome
            to try me out though. I decided to learn JavaScript and I built this entire
            project in React. Check it out on Github. After living in 8 states and two
            countries before I was eighteen years, young me kept up the vegabond trend and
            explored a myriad of lifestyles, before arriving at clarity. Still shaping my
            future self along this road to perdition, you can catch me outside, doin' it,
            waxing poetic, worldwide, across the United States to Western Cape, the
            Patagonia, Andean Colombia, down unda, Tokyo to Hakuba. How bout that?
          </p>

        </div>
      </div>
    );
  }
}

export default About;