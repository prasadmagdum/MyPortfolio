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
              I’m a final-year Computer Engineering student who loves building practical tech solutions.I enjoy working with React JS, Django, Python, and Java to create useful web applications.
              During my internship, I gained hands-on experience with dashboards, APIs, and analytics tools.I’m always curious to learn and try out new technologies.
            </p>
            <p style={{ color: '#FFFFFF' }}>
You can reach me via 
  <a 
    href="mailto:prasadmagdum307@gmail.com" 
    style={{ color: 'hsla(0, 0%, 4%, 1.00)' }}
  >
    email at prasadmagdum307@gmail.com
  </a> 
  or 
  <a 
    href="https://www.linkedin.com/in/prasad-magdum-735b13255/" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ color: ' hsla(0, 0%, 4%, 1.00)' }}
  >
    LinkedIn
  </a>.
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
