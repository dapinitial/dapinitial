import React, {Component} from 'react';
import './Blog.css';
import Subnav from './Subnav.js';
import {Link} from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div>
        <Subnav section='blog'/>
        <div className='sectionContainer'>
          <div className="headline">
            <h2>My
              <br/>
              Blog</h2>
          </div>
          <h2>Blog goes here</h2>
        </div>
      </div>
    );
  }
}

export default Blog;