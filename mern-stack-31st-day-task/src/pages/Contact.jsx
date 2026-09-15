import React from 'react';
import main from "../assets/Rectangle3.png";
import "./Contact.css";
import location from "../assets/location.png";
import email from "../assets/email.png";
import call from "../assets/call.png";
import heroimage from "../assets/heroimage.png"

const Contact = () => {
  return (
    <div>
      <div className='contact'>
        <div className='contact1'>
          <div className='contact4'>
            <div className='contact2'>
              <h4>Get In Touch</h4>
              <h1>WE RE HERE</h1>
              <h1>TO HELP</h1>
            </div>
            <div className='contact3'>
              <p>Have a question, feedback, or need assistance?</p>
              <p>Our team is here to help you. Reach out to us</p>
              <p>and we will get back to you as soon as possible.</p>
            </div>
          </div>
          <div className='contact_div'>
            <img className='contact-img' src={heroimage} alt="Main" />
          </div>
        </div>
      </div>

      <div className='contact5'>
        
        <div className='contact6'>
          <h2>Send Us a Message</h2>
          <p className="subtitle">Fill out the form below and we'll get back to you shortly.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" placeholder='Enter your name' />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" placeholder='Enter your email' />
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <select defaultValue="">
                <option value="" disabled>Select a subject</option>
                <option value="nike">NIKE</option>
                <option value="puma">PUMA</option>
                <option value="jordan">JORDAN</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea placeholder='Type your message here...' rows="4"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message &nbsp; &rarr;
            </button>
          </form>
        </div>

        <div className='contact7'>
          <div className='info-card'>
            <div className='icon-wrapper'>
              <img src={email} alt="Email Icon" />
            </div>
            <h3>Email Us</h3>
            <p className='primary-text'>support@shop.co</p>
            <p className='sub-text'>We'll respond within 24 hours.</p>
          </div>

          <div className='info-card'>
            <div className='icon-wrapper'>
              <img src={call} alt="Call Icon" />
            </div>
            <h3>Call Us</h3>
            <p className='primary-text'>+92 300 123 4567</p>
            <p className='sub-text'>Mon &ndash; Fri, 9:00 AM &ndash; 6:00 PM</p>
          </div>

          <div className='info-card'>
            <div className='icon-wrapper'>
              <img src={location} alt="Location Icon" />
            </div>
            <h3>Visit Us</h3>
            <p className='primary-text'>123 Fashion Street,<br />Lahore, Pakistan</p>
            <p className='sub-text'>
              Our office is open Monday to Friday<br />from 9:00 AM to 6:00 PM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;