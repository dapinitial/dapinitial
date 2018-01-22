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
            spirit, like I'm an apostle, reppin the Holy Spirit in Chicago. I like scars,
            marks, and prison tattoos. Runaways, the homeless, victims of the sex trade, the
            people that the web world exploits but the web industry won't retain. After
            doing some faggy design shit for awhile, totally unamused by the pop culture
            cock sucker designers and pussy ass fuck boys that wear their hats I decided to
            learn JavaScript and I built this entire project in React. Check it out on
            Github. After living in 8 states and two countries before I was eighteen years,
            young me kept up the gypsy trend and tried out a myriad of lifestyles, before
            arriving at clarity. Still shaping my future self along this road to perdition,
            you can catch me outside, doin' it, waxing poetic, worldwide, across the United
            States to Western Cape, the Patagonia, Andean Colombia, down unda, Tokyo to
            Hakuba. How bout that?
          </p>

        </div>
      </div>
    );
  }
}

export default About;