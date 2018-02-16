import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="line">
        <footer id="footer" className="dark-footer line">
          <div className='footerLayer'></div>
          <Link to='https://github.com/dapinitial' target='_blank'></Link>
          <div className='copyright line'>
            <p>
              "From Kentucky well-water to whale-watchin' off my back porch."
              <br/>
              Thank you for visiting my React.js + Node.js application on an Ec2-instance.
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
