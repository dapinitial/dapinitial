import React, {Component} from 'react';
import Subnav from '../Subnav/Subnav.js';
import {Link} from 'react-router-dom';

class Projects extends Component {
  render() {
    return (
      <div>
        <Subnav section='projects'/>
        <div className='sectionContainer'>
          <div className="headline">
            <h2>My
              <br/>
              Projects</h2>
          </div>
          <h2>Projects go here</h2>
        </div>
      </div>
    );
  }
}

export default Projects;