import React, {Component} from 'react';

class Loader extends Component {
  render() {
    return (
      <div className="loader-holder">
        <div className="loader-inner loader-vis">
          <div className="loader"></div>
        </div>
      </div>
    )
  }
}

export default Loader;