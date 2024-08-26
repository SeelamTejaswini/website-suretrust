
import React from 'react';
import './TrusteeCard.css'; 

const TrusteeCard = ({ name, title, description, imageUrl }) => {
  return (
    <div className="trustee-card">
      <img src={imageUrl} alt={`${name}`} className="trustee-image" />
      <h3 className="trustee-name">{name}</h3>
      <p className="trustee-title">{title}</p>
      <p className="trustee-description">{description}</p>
    </div>
  );
};

export default TrusteeCard;
