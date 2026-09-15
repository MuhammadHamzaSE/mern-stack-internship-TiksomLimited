import React from 'react';
import "./SubFooter.css";
import gmail from "../assets/gmaillogo.png";

const SubFooter = () => {
  return (
    <div className='subfooter-wrapper'>
      <div className='m1'>
        <div className='subfooter-heading'>
          <h1>STAY UPTO DATE ABOUT</h1>
          <h1>OUR LATEST OFFERS</h1>
        </div>
        <div className='m2'>
          <div className='m2-2'>
            <img src={gmail} alt="Email" className="gmail-icon" />
            <input className='m2-1' type="email" placeholder='Enter Your Email Address' />
          </div>
          <button className='m2-3'>Subscribe to Newsletter</button>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;