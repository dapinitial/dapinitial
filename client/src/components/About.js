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
          <h3>Quick rundown:</h3>
          <p>BORN, Hasn't died, yet. Globalwarmready. I'm, single, no kids, young and
            mentally mature. "From Ketucky well-water to whale watching off my backporch,"
            I'm not originally from Applachia but thanks to it I'm forever partial to the
            unbridled spirits. A gypsy by nature and all heart, I reside in the Pacific
            Northwest and call Seattle home. When not appreciating the outdoors and extreme
            sports, motorcycling, and pushing classic cars, I read and study JavaScript, and
            train (hard). I built this entire project in React and my educational background
            is design science. Check me out on Github. You can catch me outside, doin' it,
            waxing poetic, beachcombing, island hopping, adventuring worldwide, across the
            United States to Western Cape, the Patagonia, Andean Colombia, Oz, from Tokyo to
            Hakuba. How bout dat?
          </p>
          <h3>Current physical fitness:</h3>
          <ul>
            <li>sub 25:00 4 mile run</li>
            <li>sub 30:00 mile swim</li>
            <li>21 strict pull ups</li>
            <li>100+ pushups 2 minutes</li>
            <li>110+ situps 2 minutes</li>
            <li>4X25m underwaters - no problem</li>
          </ul>
          <br/>
          <h3>Where to find me:</h3>
          <ul>
            <li>Motown Monday's</li>
            <li>The Saint for Tacos, Tuesday</li>
            <li>Seattle Bouldering Project</li>
            <li>Swimming and group fitness at the Y</li>
            <li>Da Mystery of Chessboxin': Occidental Park</li>
            <li>Pioneer Square art walks</li>
            <li>"Red light on Main"</li>
            <li>Running the waterfront, real fast and styley</li>
            <li>Om Culture Sunday nights</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;