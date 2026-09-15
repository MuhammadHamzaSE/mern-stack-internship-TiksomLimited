import React from 'react';
import SubFooter from '../components/SubFooter';
import './Footer.css';
import shop from "../assets/Shop.png";
import twitter from "../assets/twitter1.png";
import instagram from "../assets/instagram1.png";
import facebook from "../assets/facebook1.png";
import github from "../assets/github1.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <SubFooter />

      <div className="footer-content">
        <div className="footer-brand">
          <img src={shop} alt="Shop.co" className="brand-logo" />
          <p className="brand-desc">
            We have clothes that suits your style and which you're proud to wear. From women to men.
          </p>
          <div className="social-icons">
            <img src={twitter} alt="Twitter" />
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={github} alt="Github" />
          </div>
        </div>

        <div className="col">
          <h4>COMPANY</h4>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#works">Works</a>
          <a href="#career">Career</a>
        </div>

        <div className="col">
          <h4>HELP</h4>
          <a href="#support">Customer Support</a>
          <a href="#delivery">Delivery Details</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

        <div className="col">
          <h4>FAQ</h4>
          <a href="#account">Account</a>
          <a href="#manage">Manage Deliveries</a>
          <a href="#orders">Orders</a>
          <a href="#payments">Payments</a>
        </div>

        <div className="col">
          <h4>RESOURCES</h4>
          <a href="#ebooks">Free eBooks</a>
          <a href="#tutorial">Development Tutorial</a>
          <a href="#blog">How to - Blog</a>
          <a href="#youtube">Youtube Playlist</a>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>Shop.co © 2000-2026, All Rights Reserved</p>
        <div className="payment-cards"></div>
      </div>
    </footer>
  );
};

export default Footer;