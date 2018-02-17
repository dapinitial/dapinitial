import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class FolioNav extends Component {
  render() {
    return (
      <div className="project-pagination in-anim">
        <ul>
          <li>
            <Link to="portfolio-single-sonosite.html">
              <i className="fa fa-angle-left"></i>
            </Link>
            <div className="tooltip">
              <img src="images/folio/thumbs/iviz.jpg" className="respimg" alt="" title=""/>
              <h5>SonoSite</h5>
            </div>
          </li>
          <li>
            <Link to="portfolio-grid.html">
              <i className="fa fa-th-large"></i>
            </Link>
          </li>
          <li>
            <Link to="portfolio-single-zillow.html">
              <i className="fa fa-angle-right"></i>
            </Link>
            <div className="tooltip">
              <img src="images/folio/thumbs/zillow.jpg" className="respimg" alt="" title=""/>
              <h5>Zillow</h5>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default FolioNav;