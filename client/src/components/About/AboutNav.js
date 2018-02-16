import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class AboutNav extends Component {
  render() {
    return (
      <nav className='navContainer'>
        <div className='sectionLinks'>
          <Link onClick={this.handleClick} to='/about'>About</Link>
        </div>
        <div className='sectionLinks'>
          <Link onClick={this.handleClick} to='/resume'>
            Resume</Link>
        </div>
        <div className='sectionLinks'>
          <Link onClick={this.handleClick} to='/awards'>
            Awards</Link>
        </div>
        <div className='sectionLinks'>
          <Link onClick={this.handleClick} to='/contact'>
            Contact</Link>
        </div>
      </nav>
    );
  }
}

export default AboutNav;