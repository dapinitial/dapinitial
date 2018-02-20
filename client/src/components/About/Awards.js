import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
//https://www.npmjs.com/package/react-responsive-carousel
class Awards extends Component {

  render() {

    return (

      <div className="container">
        <div className="section-title">
          <div className="sect-subtitle">
            <span>Awards</span>
          </div>
          <h3>What I've Won</h3>
          <h2>Awards</h2>
          <div className="st-separator"></div>
        </div>
        <div className="line">

          <Carousel className="line">
            <div>
              <img src="https://www.placehold.it/640x480"/>
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://www.placehold.it/640x480"/>
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://www.placehold.it/640x480"/>
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>

        </div>
      </div>
    )
  }
}

export default Awards;