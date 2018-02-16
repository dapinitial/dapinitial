import React, {Component} from 'react';
import Subnav from '../Subnav/Subnav.js';
import {Link} from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div className="content flex">
        <Subnav section='contact'/>
        <div className="left-column">
          <div className="fixed-column">
            <div className="bg-wrapper">
              <div className="bg bg-scroll"></div>
              <div className="overlay"></div>
              <div className="bg-title">
                <span>blog</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="section-separator"></div>
          <section id="about">
            <div className="container">
              <div className="section-title">
                <div className="section-subtitle scrollable scrollable-between">
                  <span>My Blog</span>
                </div>
                <h3>What's poppin</h3>

                <h2>My Blog</h2>
                <div className="st-separator"></div>
              </div>
              <div className="section-body">
                <h4 className="text-subtitle">David Puerto</h4>
                <h3 className="text-title">UI Designer
                  <span>&amp;</span>
                  Developer From Seattle, WA USA</h3>
                <p>
                  With over a decade of browser-centric design and development experience, I've
                  built my career upon a love for meaningful, high-impact, interactive media
                  design. Let's be transparent here: I'm a Flash-refugee who was doing
                  responsive-design and UX before the words were even coined. My sedulous approach
                  to creating refined, yet innovative design systems involves visually
                  synthesizing complex workflows into extensible pattern libraries expressing the
                  underlying design language. What started out as a mastery of traditional screen
                  design software became an obsession with the modern web development ecosystem. I
                  pride myself as a seasoned, hands-on UX leader that delivers the highest-level
                  of fit and finish to the products I love; &nbsp;
                  <em>from brainchild to launch</em>.
                </p>
                <p>
                  I like hackathons, the movie Hackers, getting shreddy, The Lost Boys, "the
                  Bristol sound," jumping out of airplanes, reconnecting, filling my passport with
                  stamps, board sports, different languages, making street art, praying in
                  temples, running every city, working on my abs, the internet, pushing myself
                  phyically, mountains, surf, good design, culinary and craft anything,
                  battle-tested friendships, camaraderie, fighting the powers that be for what I
                  believe in, people who suck at karaoke, muscle cars, german cars, italian bikes,
                  road trips, thru hikes, awkard moments, wake up calls, morning people, happy
                  people, Church people, laughing myself into tears, brunch, and being surprised.
                </p>
                <Link to="/folio" className="btn hide-icon">
                  <i className="fa fa-angle-right"></i>
                  <span>Read More</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Blog;