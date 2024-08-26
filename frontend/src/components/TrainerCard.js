import React from 'react';
import './TrainerCard.css'; 

const TrainerCard = ({ trainer }) => {
    return (
        <div className="trainer-card">
            <div className="trainer-info">
                <h3 className="trainer-name">{trainer.name}</h3>
                <p className="trainer-profession">{trainer.profession}</p>
                <p className="trainer-details">{trainer.details}</p>
            </div>
        </div>
    );
};

export default TrainerCard;
