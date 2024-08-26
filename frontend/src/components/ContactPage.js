import React from 'react';
import './ContactPage.css'; 

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-boxes">
        <div className="contact-box">
          <h2>Phone:</h2>
          <p> 9440045717</p>
        </div>
        <div className="contact-box">
          <h2>Phone:</h2>
          <p> 8309228027</p>
        </div>
        <div className="contact-box">
          <h2>gmail:</h2>
          <p>suretrust2020@gmail.com</p>
        </div>
        <div className="contact-box">
          <h2>Address:</h2>
          <p>Sreeguru towers, Second floor, Gopuram road, opp. Union bank of India, Puttaparthi, Andhra Pradesh 515134</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
