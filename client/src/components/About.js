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
          <h3 className="shimmer">Rundown:</h3>
          <h4>"From Ketucky well-water to whale watching off my backporch,"
          </h4>
          <p>BORN, Hasn't died, yet. Young and mentally mature. I'm not originally from
            Applachia, and I seldom return to it, but thanks to it I'm forever linked to the
            unbridled spirit. A gypsy since birth and all heart by nature, I reside in the
            Pacific Northwest calling Seattle home. When not appreciating the outdoors,
            participating in extreme sports, or indulging in the finer things in life such
            as fien dining, motorcycling, and pushing classic whips, I read and study
            JavaScript, funk around with CSS, and train (hard). In 2011 I was on mark to
            finish in the top 100 at the Spartan Invitational in Dallas, TX when an injury
            caused me to be unable to complete the final obstacle.
          </p>

          <p>I built this entire project in React and Node and deployed to an ec2-instance
            on AWS-Ubuntu. My educational background is design science and I'm a bit of a
            tinkerer and I like making stuff that people think is cool. "From brainchild to
            launch." I love CSS bugs and pattern libraries. in 2015 I took first place at
            Seattle's largest hackathon with my team SpaceLabForever and I am always up for
            new hackathon opporunties and remote work. Check me out on Github and CodePen
            and StackOverflow and find me on IRC. Otherwise catch me outside, doin' it,
            waxing poetic, beachcombing, island hopping, adventuring worldwide, across the
            United States to Western Cape, the Patagonia, Andean Colombia, Oz, from Tokyo to
            Hakuba. How bout dat?
          </p>
          <h3 className="shimmer">Current fitness:</h3>
          <ul>
            <li>sub 25:00 4 mile run</li>
            <li>sub 30:00 mile swim</li>
            <li>24 strict pull ups</li>
            <li>100+ pushups 2 minutes</li>
            <li>110+ situps 2 minutes</li>
            <li>4X25m underwaters - no problem</li>
          </ul>
          <br/>
          <h3 className="shimmer">Where to find me:</h3>
          <ul>
            <li>Motown Monday's</li>
            <li>The Saint for Tacos, Tuesday</li>
            <li>Seattle Bouldering Project</li>
            <li>Cal Anderson Park on a fixie</li>
            <li>Swimming and group fitness at the Y</li>
            <li>Stevens Pass on Skyline / Terrain Park</li>
            <li>Adult Skate White Center</li>
            <li>Golden Gardens or Secret beaches</li>
            <li>High dive at Madison Park</li>
            <li>Da Mystery of Chessboxin': Occidental Park</li>
            <li>Pioneer Square art walks</li>
            <li>Brunch at Brasstacks in Georgetown</li>
            <li>"Red light on Main"</li>
            <li>Running the waterfront, real fast and styley</li>
            <li>Om Culture Sunday nights</li>
          </ul>
          <br/>
          <h3 className="shimmer">Likes:</h3>
          <ul>
            <li>AirBnb</li>
            <li>OfferUp</li>
            <li>Space</li>
            <li>Umami</li>
            <li>CodePen</li>
            <li>GitHub</li>
            <li>StackOverflow</li>
            <li>Ducati</li>
            <li>Audi</li>
            <li>Espirit de corps</li>
            <li>Being able to see all my abs</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;