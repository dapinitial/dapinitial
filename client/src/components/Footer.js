import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer" className="dark-footer">
          <div className='footerLayer'></div>
          <Link to='https://github.com/dapinitial' target='_blank'></Link>
          <div className='copyright'>
            <p>
              <strong>"From Kentucky well-water to whale-watchin' off my back porch."</strong>
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
