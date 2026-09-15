import React from 'react';
import main from "../assets/Rectangle3.png";
import "./Hero.css";
import i1 from "../assets/vector.png";
import i2 from "../assets/vector2.png";
import i3 from "../assets/vector3.png";
import i4 from "../assets/vector4.png";
import i5 from "../assets/vector5.png";
import MarqueeModule from 'react-fast-marquee';
import heroimage from "../assets/heroimage.png"

const Hero = () => {
  const Marquee = MarqueeModule.default ?? MarqueeModule;

  return (
    <div>
      <div className='hero_section'>
        <div className='heading' >
          <h1>Find Clothes</h1>
          <h1>That Matches</h1>
          <h1>Your Style</h1>
          <div className='subhead' >
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className='btn'>Shop Now</button>
          </div>
        </div>
        <div className='hero-img-container'>
          <img className='hero_img' src={heroimage} alt="Hero Banner" />
        </div>
      </div>

      <div className='marquee-container'>
        <Marquee speed={40} gradient={false}>
          <div className='img1'>
            <img src={i1} alt="Brand 1" />
            <img src={i2} alt="Brand 2" />
            <img src={i3} alt="Brand 3" />
            <img src={i4} alt="Brand 4" />
            <img src={i5} alt="Brand 5" />
            <img src={i1} alt="Brand 1" />
            <img src={i2} alt="Brand 2" />
            <img src={i3} alt="Brand 3" />
            <img src={i4} alt="Brand 4" />
            <img src={i5} alt="Brand 5" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;