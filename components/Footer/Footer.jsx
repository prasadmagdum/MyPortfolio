import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user.jpg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <p>Passionate computer science student exploring the realms of programming, algorithms, and software development </p>
            
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type='email' placeholder='Enter your email'/>

                </div>
                <div className="footer-subscribe">Subscribe</div>
                
            </div>       
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'> prasad Magdum</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p> Privacy policy</p>
                <p>Connect with me</p>

            </div>
        </div>
    </div>
  )
}

export default Footer