import React from 'react';
import './About.css';
import logo from '../../assets/logo.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={logo} alt=""/>
      </div>
      <div className='about-sections'>
        <div className='about-left' />
        {/* <img src={logo} alt=""/> */}
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm currently pursuing my engineering degree at Bharati Vidyapeeth College of Engineering, Kolhapur, where I'm learning "computer science & engineering (Artificial Intelligence & Machine Learning).
            </p>
            <p>
              You can reach me via <a href="mailto:prasadmagdum307@gmail.com">email at prasadmagdum307@gmail.com</a> or <a href="https://www.linkedin.com/in/your-profile-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>Advanced & Core Python</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>Django & Core Java</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>Basic JavaScript & HTML</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>C Programming & CPP</p><hr style={{ width: "50%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>02+</h1>
          <p>EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>07+</h1>
          <p>PROJECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>02+</h1>
          <p>OTHERS COURSES</p>
        </div>
      </div>
    </div>
  );
}

export default About;
