import React, {Component} from 'react';
import Subnav from '../Subnav/Subnav.js';
import {Link} from 'react-router-dom';
import FolioPieceNav from './FolioPieceNav.js';
import Footer from '../Footer/Footer.js';

class Folio extends Component {
  render() {
    return (
      <div id="folio-dap" className="content flex">
        <Subnav section='contact'/>
        <div className="left-column">
          <div className="fixed-column">
            <div className="bg-wrapper">
              <div className="bg bg-scroll"></div>
              <div className="overlay"></div>
              <div className="bg-title">
                <span>My Folio</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <FolioPieceNav/>
          <section id="sec1">
            <div className="container">
              <div className="section-title">
                <div className="sect-subtitle skrollable skrollable-after">
                  <span>Folio</span>
                </div>
                <h3>What I've been doing</h3>
                <h2>Puertofolio</h2>
                <div className="st-separator"></div>
              </div>
              <div className="section-body">
                <h3 className="text-title">It has been my honor</h3>
                <p>
                  Sometimes it's more meaningful to receive an email or a postcard don't you
                  think? Please, fill out the form below for esoteric updates from yours truly.
                  &#9786;
                </p>
              </div>
            </div>
          </section>
          <Footer className="line"/>
        </div>
      </div>
    );
  }
}

export default Folio;