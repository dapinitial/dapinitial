import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import AboutNav from './AboutNav.js';
import Subnav from '../Subnav/Subnav.js';
import Footer from '../Footer/Footer.js';

let backgroundImage = 'http://www.placehold.it/1200x1900';

class About extends Component {
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
                <span>about me</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <section id="sec1">
            <div className="scroll-nav-holder">
              <nav className="scroll-nav">
                <ul>
                  <li>
                    <Link
                      to="index-video.html#sec1"
                      data-bgscr="mages/bg/long/threeFingersLookout.jpg"
                      data-bgtex="about"
                      className="act-link scroll-link">
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="scroll-link"
                      to="index-video.html#sec2"
                      data-bgscr="images/bg/long/awesome.jpg"
                      data-bgtex="resume">
                      <span>Resume</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="scroll-link"
                      to="index-video.html#sec3"
                      data-bgscr="images/hackhousing.jpg"
                      data-bgtex="awards">
                      <span>Awards</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="container">
              <div className="section-title">
                <div className="sect-subtitle skrollable skrollable-after">
                  <span>About</span>
                </div>
                <h3>Who I am</h3>

                <h2>About me</h2>
                <div className="st-separator"></div>
              </div>
              <div className="section-body">
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
                  <span>View My Work</span>
                </Link>
              </div>
            </div>
          </section>
          <div className="section-separator"></div>
          <section id="sec2">
            <div className="container">
              <div className="section-title">
                <div className="sect-subtitle skrollable skrollable-after">
                  <span>Resume</span>
                </div>
                <h3>What I've been doing
                </h3>
                <h2>Resume
                </h2>
                <div className="st-separator"></div>
              </div>
              <div className="clearfix"></div>
              <div className="accordion" data-name="1">
                <div className="accordion-title transition activeac">
                  <h5>
                    <a href="index-video.html#">
                      <i className="fa fa-briefcase"></i>
                      2014-2015
                      <span>
                        - Facebook, Seattle, Washington</span>
                    </a>
                  </h5>
                </div>
                <div className="accordion-inner">
                  <h4>UI Designer</h4>
                  <ul>
                    <li>Product Design</li>
                    <li>Visual Design</li>
                    <li>UX Research &amp; Prototyping</li>
                  </ul>
                  <p>
                    UX Research on the IDE experience, art direction, iconography, typography, style
                    guide, and UI implementation landing commits in HTML/CSS/SVG for the open source
                    projects `Lyric` and `Nuclide`. FBIDE was a well-known Facebook tool that was
                    highly visible, impacting a vast number of Facebook engineers prior to 2017.
                  </p>
                </div>
                <div className="accordion-title transition">
                  <h5>
                    <a href="index-video.html#">
                      <i className="fa fa-briefcase"></i>
                      2013 &amp; 2014
                      <span>
                        - Microsoft Xbox &amp; CFIT, Redmond, Washington</span>
                    </a>
                  </h5>
                </div>
                <div className="accordion-inner">
                  <h4>Prototyper &amp; Design Integrator</h4>
                  <ul>
                    <li>HTML/CSS/jQuery</li>
                    <li>Prototypes</li>
                    <li>Design Integration</li>
                  </ul>
                  <p>
                    Explored Xbox SmartGlass 2.0's touch-based user experience providing high-
                    fidelity prototypes via web technologies maintaining a single codebase for
                    cross-platform testing. Prototyped and implemented designs for HRWeb with
                    ARIA-tags for inclusion. Prototyped a filtering system to locate and communicate
                    with employees who had bandwidth and expertise based on #hashtag filters that
                    were in place on Dr. Who, the interactive org chart.
                  </p>
                </div>
                <div className="accordion-title transition">
                  <h5>
                    <a href="index-video.html#">
                      <i className="fa fa-briefcase"></i>
                      2013
                      <span>
                        - FujiFilm SonoSite, Bothell, Washington</span>
                    </a>
                  </h5>
                </div>
                <div className="accordion-inner">
                  <h4>Prototyper &amp; Design Integrator</h4>
                  <ul>
                    <li>HTML/CSS/jQuery</li>
                    <li>Prototypes</li>
                    <li>A/B Testing in UX Lab</li>
                  </ul>
                  <p>
                    Prototyped a handheld ultrasound device for military and medical professionals.
                    Think of it as something along the lines of Star Trek's Tricorder.
                  </p>
                </div>
                <div className="accordion-title transition">
                  <h5>
                    <a href="index-video.html#">
                      <i className="fa fa-briefcase"></i>
                      2012
                      <span>
                        - Verizon-Wireless, Atlanta, Georgia</span>
                    </a>
                  </h5>
                </div>
                <div className="accordion-inner">
                  <h4>Prototyper &amp; Design Integrator</h4>
                  <ul>
                    <li>HTML/CSS/jQuery</li>
                    <li>Prototypes</li>
                    <li>Presentation Layer Development</li>
                  </ul>
                  <p>
                    Delivered the needs’-based presentation layer for an internal ad CRM from the
                    ground up alongside a software engineer. Prototyped the tablet experience for
                    VZW's account management and device management interfaces. Reused my HTML/CSS to
                    create a responsive, living pattern library while single-handedly refactoring
                    the client-side markup and style sheets from offshore teams.
                  </p>
                </div>
                <div className="accordion-title transition">
                  <h5>
                    <a href="index-video.html#">
                      <i className="fa fa-briefcase"></i>
                      2011
                      <span>
                        - Sherwin-Williams, Cleveland, Ohio</span>
                    </a>
                  </h5>
                </div>
                <div className="accordion-inner">
                  <h4>Prototyper &amp; Design Integrator</h4>
                  <ul>
                    <li>HTML/CSS/jQuery</li>
                    <li>Presentation Layer Development</li>
                  </ul>
                  <p>
                    Created a responsive, living pattern library for front-end developers using
                    HTML5/CSS3 adhering to SMACSS and OOCSS principles that would display perfectly,
                    device-agnostic, across any browser. Served as a liaison between outside
                    agencies and Sherwin-Williams.
                  </p>
                </div>
                <div className="accordion-title transition">
                  <h5>
                    <a href="index-video.html#">
                      <i className="fa fa-briefcase"></i>
                      2008-2010
                      <span>
                        - Dealerskins, Nashville, Tennessee</span>
                    </a>
                  </h5>
                </div>
                <div className="accordion-inner">
                  <h4>Flash Designer</h4>
                  <p>
                    Delivered a full-Flash website every three days serving as the presentation
                    layer over a custom CRM tool built in Flex. Designed visual mockups for NADA
                    competition. Produced prototypes for future products. Redesigned the company's
                    homepage and campaigned for a move away from Flash back towards traditional web
                    technologies. Played catcher on company kickball team.
                  </p>
                </div>
                <div className="accordion-title transition">
                  <h5>
                    <a href="index-video.html#">
                      <i className="fa fa-briefcase"></i>
                      2004-2007
                      <span>
                        - The Center for Rural Development, Somerset, Kentucky</span>
                    </a>
                  </h5>
                </div>
                <div className="accordion-inner">
                  <h4>Web Designer</h4>
                  <p>
                    Quintessential "foot in the door"
                  </p>
                  <p>
                    Worked under the supervision of a seasoned designer supporting internal and
                    external clients in the 42-county service area that this federal non-profit
                    organization -- the brainchild of Congressman Hal Rogers in Somerset, Kentucky.
                    Our mission: Promote the arts and technologies throughout Appalachia to expose
                    people to the impact they can make across distributed learning and remote work
                    in technology, programming, and digital design. Federal non-profit and their
                    affiliates, including internal and external clients of a 42-county service area
                    in Southern and Eastern, Appalachian Kentucky through a myriad of web and
                    graphic design initiatives promoting the arts, technology, entrepreneurship,
                    leadership, youth development, personal accountability, environmental
                    responsibility, and small business development. Was able to establish a
                    skateboarding park alongside baseball and soccer fields working with young
                    athletes and community leaders to provide a safe haven for the skateboarders to
                    avoid a city ordinance banning skateboarding.
                  </p>
                </div>
                <div className="accordion-title transition">
                  <h5>
                    <a href="index-video.html#">
                      <i className="fa fa-graduation-cap"></i>
                      2004-2007
                      <span>
                        - The Art Institute of Atlanta &amp; Online
                      </span>
                    </a>
                  </h5>
                </div>
                <div className="accordion-inner">
                  <h4>Graduated with a Bachelor's of Sciences in Interactive Media Design</h4>
                  <p>
                    Awarded Best of Show 2007 at Portfolio Review
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="section-separator"></div>
          <section id="sec3">
            <div className="container">
              <div className="section-title">
                <div className="sect-subtitle skrollable skrollable-between">
                  <span>Awards</span>
                </div>
                <h3>What I've Won</h3>
                <h2>Awards</h2>
                <div className="st-separator"></div>
              </div>
              <div className="single-slider-holder">
                <div className="customNavigation">
                  <a className="next-slide transition">
                    <i className="fa fa-angle-right"></i>
                  </a>
                  <a className="prev-slide transition">
                    <i className="fa fa-angle-left"></i>
                  </a>
                </div>
                <div
                  className="single-slider owl-carousel testimonials-slider owl-theme owl-loaded">

                  <div className="owl-stage-outer owl-height">
                    <div className="owl-stage">
                      <div className="owl-item active">
                        <div className="item">
                          <div className="testi-item">
                            <div className="testi-item-img">
                              <img src="images/hackhousing.jpg" alt="" className="respimg"/></div>
                            <div className="testi-item-text">
                              <h3>Zillow #hackHousing - UW, Census.gov, Data.gov, Housing Bureau, and more</h3>
                              <p>
                                Hacking the housing market: Tech teams use open data to help people find
                                affordable homes.</p>
                              <p>This special series focuses on important community issues, innovative
                                solutions to societal challenges, and people and non-profit groups making an
                                impact through technology.</p>
                              <a
                                href="http://www.geekwire.com/2015/hacking-housing-market-tech-teams-use-open-data-help-people-find-affordable-homes/"
                                target="_blank">Via GeekWire</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <div className="testi-item">
                            <div className="testi-item-img"></div>
                            <div className="testi-item-text">
                              <h3>Best of Show 2007</h3>
                              <p>
                                Representing the Art Institute of Atlanta and Online Divisions I took home the
                                top award from my design college at the Portfolio Review for Interactive Media
                                Design Bachelor's graduates.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-controls">
                    <div className="owl-nav">
                      <div className="owl-prev">prev</div>
                      <div className="owl-next">next</div>
                    </div>
                    <div className="owl-dots">
                      <div className="owl-dot active">
                        <span></span>
                      </div>
                      <div className="owl-dot">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default About;