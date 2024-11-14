import React from 'react';
import './Hero.css';
import image from '../../assets/profile.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id='home' className='hero'>
      <img src={image} alt='' />
      <h1><span>I’m @prasadmagdum</span></h1>
      <p>Passionate computer science student exploring the realms of programming, algorithms, and software development</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
      
      {/* Back to Top Button */}
      <button className="back-to-top" onClick={scrollToTop}>^Top</button>
    </div>
  );
};

export default Hero;
