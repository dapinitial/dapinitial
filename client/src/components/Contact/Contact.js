import React, {Component} from 'react';
import helpers from '../../utils/helpers';
import Subnav from '../Subnav/Subnav.js';

const initialState = {
  name: "",
  email: "",
  message: ""
};

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    helpers.postSendEmail(this.state.name, this.state.email, this.state.message);
    this.setState({
      name: "",
      email: "",
      message: "Thank you for your message, " + this.state.name + "!"
    });
  }

  render() {
    return (
      <div className='content'>
        <Subnav section='contact'/>
        <div>
          <div className="section-separator"></div>
          <section id="about">
            <div className="container">
              <div className="section-title">
                <div className="section-subtitle scrollable scrollable-between">
                  <span>Contact me</span>
                </div>
                <h3>Hollar at me</h3>

                <h2>Contact me</h2>
                <div class="st-separator"></div>
                <h3 class="text-title">Let's Keep In Touch</h3>
                <p>Sometimes it's more meaningful to receive an email or a postcard don't you
                  think? Please, fill out the form below for esoteric updates from yours truly.
                </p>
              </div>
              <div className="line">
                <div className='formContainer'>

                  <form id="contact-form" onSubmit={this.handleSubmit}>
                    <div className=''>
                      <input
                        id="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Your name"
                        className="validate"
                        required/>

                      <input
                        id="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Your email address"
                        className="validate"
                        required/>

                    </div>
                    <div className='formText'>
                      <textarea
                        id="message"
                        type="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        placeholder="Message"
                        className="validate"
                        required
                        rows="8"
                        cols="50"/>

                    </div>
                    <div className='submitButton'>
                      <button type="submit" id="submit-message">Submit Message</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Contact;
