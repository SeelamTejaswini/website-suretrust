import React from 'react';
import './ServicePage.css'; 

const ServicesPage = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-boxes">
        <div className="service-box">
          <h2>Plantation</h2>
          <p>Join us in our efforts to plant trees and make the world greener.</p>
        </div>
        <div className="service-box">
          <h2>Blood Donation</h2>
          <p>Contribute to saving lives by donating blood at our organized camps.</p>
        </div>
        <div className="service-box">
          <h2>Service to Senior Citizens</h2>
          <p>Provide support and care to senior citizens in our community.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
