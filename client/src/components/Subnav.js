import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Power4, TweenLite} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import './Subnav.css';

class Subnav extends Component {
  constructor() {
    super();
    this.state = {
      className: 'hidden'
    };
  }

  handleScroll() {
    console.log(document.documentElement.scrollTop);

    if (document.documentElement.scrollTop > 430) {
      this.setState({className: 'show'})
    } else {
      this.setState({className: 'hidden'})
    }
  }

  componentDidMount() {
    window.onscroll = () => {
      this.handleScroll()
    };
  }

  handleClick = () => {
    TweenLite.to(window, 1, {
      scrollTo: {
        y: 0,
        autoKill: false,
        autoRound: false,
        force3D: true
      },
      ease: Power4.easeOut
    });
  };

  render() {
    return (
      <div>
        <div className='sectionHeaderLayer'></div>
        <div className='sectionHeaderContainer'>
          <div className='sectionHeaderNavigation'>
            <div className='sectionTitle'>
              {this.props.section}
            </div>
          </div>
        </div>
        <Link
          id="go-top"
          onClick={this.handleClick}
          to='/home'
          className={this.state.className}>
          <i className="fa fa-angle-up"></i>
        </Link>
      </div>
    );
  }
}

export default Subnav;