import React from 'react'
import './Contact.css'

import mail_icon from '../../assets/mail.jpg'
import location_icon from '../../assets/location.jpg'
import call_icon from '../../assets/call.jpg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "70ba6b23-04dd-4c7e-ba4b-c425b85110e8");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
        } else {
            console.error("Form submission failed", res);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get In Touch</h1>
            </div>
            <div className="contact-section">
                <div className='contact-left'>
                    <h2>Let's talk</h2>
                    <p>Contact Me</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail Icon" /><p>prasadmagdum307@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon" /><p>8767963581</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon" /> <p>Kolhapur</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' required />
                    
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' required />
                    
                    <label htmlFor="message">Write Your Message here</label>
                    <textarea name='message' rows="8" placeholder='Enter your Message' required></textarea>
                    
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
