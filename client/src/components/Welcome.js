import React, {Component} from 'react';
import './Welcome.css';
import 'raf/polyfill';
import Home from './Home';

const welcome = "Sup";

const loadHome = () => {
  window
    .location
    .assign('/home');
};

class Welcome extends Component {

  render() {
    return (
      <div className='welcomeBackground'>
        <h2>{welcome}</h2>
        <Home/>
      </div>
    );
  }
}

export default Welcome;
