import React, { useState } from 'react';
import { Link } from 'react-router';
import shop from "../assets/Shop.png";
import searchicon from "../assets/icon2.png";
import profileicon from "../assets/icon1.png";
import "./Header.css";
const Header = ({ search, setSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header-wrapper">
      <div className="header">
        <div className="header-left">
          <button 
            className="hamburger-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle Navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

        
          <div className="logo-container">
            <Link to="/">
              <img src={shop} alt="SHOP.CO" />
            </Link>
          </div>
        </div>

        <nav className={`navbar1 ${isMenuOpen ? 'active' : ''}`}>
          <Link className="link1" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link className="link2" to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link className="link3" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>

        <div className="input desktop-search">
          <img className="searchicon" src={searchicon} alt="Search" />
          <input
            className="input1"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Product"
          />
        </div>

        <div className="header-right-icons">
          <button className="icon-btn mobile-search-btn" aria-label="Search">
            <img src={searchicon} alt="Search" />
          </button>

          <Link to="/profile" className="icon-btn" aria-label="Profile">
            <img src={profileicon} alt="Profile" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;