import React from 'react'
import main from "../assets/Rectangle3.png";
import "./About.css"
import delivery from "../assets/delivery.png"
import leaf from "../assets/leaf.png"
import heart from "../assets/heart.png"
import secure from "../assets/secure.png"
import img1 from "../assets/img1.jpg"
import blacktick from "../assets/blacktick.png"
import img2 from "../assets/img2.jpg"
import heroimage from "../assets/heroimage.png"
const About = () => {
  return (
    <div>
        <div className='about'>
            <div className='about1'>
                <div className='about4'>
                    <div className='about2'>
                    <h4>Our Story</h4>
                    <h1>STYLE MEETS</h1>
                    <h1>PURPOSES</h1>
                    </div>
                    <div className='about3'>
                    <p>Browse through our diverse range of meticulously crafted garments, designed</p> 
                   <p>to bring out your individuality and cater to your sense of style.</p>
                 <p>Browse through our diverse range of meticulously crafted garments, designed</p> 
                   <p>to bring out your individuality and cater to your sense of style.</p>
                 <p>Browse through our diverse range of meticulously crafted garments, designed</p> 
                   <p>to bring out your individuality and cater to your sense of style.</p>
                    </div>
                </div>
                <div className='about-div'>
                    <img className='about_image' src={heroimage} alt="" />
                </div>
            </div>
        </div>
        <div className='about6'>
            <div className='about5'>
            <div>
                <img src={leaf} alt="" style={{height:"25px", width:"25px"}} />
                <h3>Premium Quality</h3>
                <p style={{color:'gray'}}>Only the best materials</p>
                <p style={{color:'gray'}}>for lasting style</p>
                 </div>
                <div>
                <img src={delivery} alt="" style={{height:"25px", width:"25px"}} />
                <h3>Fast And Reliable Shipping</h3>
                <p style={{color:'gray'}}>Get Your Orders on Time </p>
                <p style={{color:'gray'}} >on Every Time</p>
                </div>
                <div>
                <img src={secure} alt="" style={{height:"25px", width:"25px"}} />
                <h3>Secure Payments</h3>
                <p style={{color:'gray'}} >Shop With Confidence</p>
                <p style={{color:'gray'}} >and peace of mind</p>
                 </div>
                <div>
                <img src={heart} alt="" style={{height:"25px", width:"25px"}} />
                <h3>Customer First</h3>
                <p style={{color:'gray'}} >We Are here for you </p>
                <p style={{color:'gray'}} >always</p>
                </div>
        </div>
        </div>
        <div className='about7'>
            <div>
                <img src={img1} alt="" style={{height:"100%",width:"100%" ,borderRadius:"15px"}} />
            </div>
            <div>
                <div className='about8'>
                <h3 style={{marginBottom:"10px"}}>Our Mission</h3>
                <h1>Better Fashion</h1>
                <h1>For A Better Future</h1>
                </div>
                <div className='about9'>
                  <p>Browse through our diverse range of meticulously crafted garments, designed</p> 
                   <p>to bring out your individuality and cater to your sense of style.</p>
                 <p>Browse through our diverse range of meticulously crafted garments, designed</p> 
                   <p>to bring out your individuality and cater to your sense of style.</p>
                 <p>Browse through our diverse range of meticulously crafted garments, designed</p> 
                   <p>to bring out your individuality and cater to your sense of style.</p> 
                </div>
                <div className='about10'>
                    <div>
                        <h1>50K+</h1>
                        <p style={{color:'gray'}} >Happy Customers</p>
                    </div>
                    <div>
                        <h1>100+</h1>
                        <p style={{color:'gray'}} >Brand & Collection</p>
                    </div>
                    <div>
                        <h1>5+</h1>
                        <p style={{color:'gray'}} >Years Of Experience</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='about11'>
            <div>
                <div className='about12' >
                <h3 style={{marginBottom:"10px"}} >Our Values</h3>
                <h1>More Than Just</h1>
                <h1>Clothes</h1>
                </div>
                <div className='about13'>
                    <p>We are more than a store -- We are Community</p>
                    <p>Our Values guide everything we do, from the</p>
                    <p>products we create to the people we work with </p>
                </div>
                <div style={{display:'flex' ,gap:"10px", marginBottom:"10px"}}>
                    <div>
                        <img src={blacktick} alt="" />
                    </div>
                    <div className='about14'>
                        <h3>Integrity</h3>
                        <p style={{color:'gray'}}  >We do what always right</p>
                    </div>
                </div>
                    <div style={{display:'flex' ,gap:"10px",marginBottom:"10px" }}>
                    <div>
                        <img src={blacktick} alt="" />
                    </div>
                    <div className='about14'>
                        <h3>Innovation</h3>
                        <p style={{color:'gray'}}  >Constantly improving ,always evolving</p>
                    </div>
                </div>
                    <div style={{display:'flex' ,gap:"10px", marginBottom:"10px"}}>
                    <div>
                        <img src={blacktick} alt="" />
                    </div>
                    <div className='about14'>
                        <h3>Sustainability</h3>
                        <p style={{color:'gray'}}  >A cleaner planet for future generation</p>
                    </div>
                </div>
                    <div style={{display:'flex' ,gap:"10px",marginBottom:"10px"}}>
                    <div>
                        <img src={blacktick} alt="" />
                    </div>
                    <div className='about14'>
                        <h3>Community</h3>
                        <p style={{color:'gray'}}  >Stronger Together</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={img2} alt="" style={{height:"100%",width:"100%" ,borderRadius:"15px"}}  />
            </div>
        </div>
    </div>
  )
}

export default About