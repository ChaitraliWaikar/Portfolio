import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact({ darkMode }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_60j85go', 'template_gi12wky', form.current, {
        publicKey: 'GeY6rh79L9EaSnEFD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
  };

  // Using public folder paths
  const contactCards = [
    {
      image: "/images/emailicon.png",
      title: "Email",
      handle: "chaitraliwaikar05@gmail.com",
      link: "mailto:chaitraliwaikar05@gmail.com"
    },
    {
      image: "/images/linkedinicon.png",
      title: "LinkedIn",
      handle: "linkedin.com/in/chaitrali-waikar",
      link: "https://www.linkedin.com/in/chaitrali-waikar-5a482b282/"
    },
    {
      image: "/images/githubicon.png",
      title: "GitHub",
      handle: "github.com/Chaitrali-Waikar",
      link: "https://github.com/ChaitraliWaikar"
    }
  ];

  return (
    <div id="contact" className={darkMode ? "contact-section-dark" : "contact-section"}>
      <h2 className="title">Get in Touch</h2>
      <p className="subtitle">Connect with me on social media or send me an email</p>
      
      <div className="contact-cards-container">
        {contactCards.map((contact, index) => (
          <a 
            href={contact.link} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="contact-card">
              <div className="icon-wrapper">
                <img src={contact.image} alt={contact.title} className="contact-icon" />
              </div>
              <h3 className="contact-title">{contact.title}</h3>
              <p className="contact-handle">{contact.handle}</p>
              <button className="contact-btn">
                Connect
              </button>
            </div>
          </a>
        ))}
      </div>

      <div className="divider"></div>

      <div className="message-section">
        <h3 className="message-title">Or Send a Message</h3>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name"
              name="user_name"
              className="form-input" 
              placeholder="Enter your name" 
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              name="user_email"
              className="form-input" 
              placeholder="Enter your email" 
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message"
              name="message"
              className="form-textarea" 
              placeholder="Your message here..."
              rows="5"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="submit-btn"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
