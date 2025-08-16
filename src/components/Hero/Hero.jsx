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
      <h1><span>I’m @prasadmagdum </span></h1>
      <p>Code. Create. Contribute.| React JS • Django • Python • Basic Java • Basic HTML & CSS • C & C++ |
        Final Year CSE (AIML) Student| Fresher | Open to Opportunities</p>
      <div className="hero-action">
        
        {/* Resume Button */}
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hero-resume"
        >
          Dowonload Resume
        </a>
      </div>
      
      {/* Back to Top Button */}
      <button className="back-to-top" onClick={scrollToTop}>^Top</button>
    </div>
  );
};

export default Hero;
