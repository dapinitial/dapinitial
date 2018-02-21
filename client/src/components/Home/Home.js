import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
// import Loader from '../Loader/Loader.js';
import About from '../About/About.js';
import Blog from '../Blog/Blog.js';
import Folio from '../Folio/Folio.js';
import Contact from '../Contact/Contact.js';
import HeroTitle from '../HeroTitle/HeroTitle.js';
import '../../images/d.svg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: 'https://www.youtube.com/watch?v=dVkK36KOcqs'
    };
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          {/* <Loader/> */}
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
                <HeroTitle/>
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