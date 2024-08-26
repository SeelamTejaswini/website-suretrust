import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ image, title, description, id, onEnroll }) => {
    return (
        <div className="course-card">
            <img src={image} alt={title} className="course-image" />
            <h3 className="course-title">{title}</h3>
            <p className="course-description">{description}</p>
            <Link to={`/courses/${id}/details`}>
                <button className="more-details-btn">More Details</button>
            </Link>
            <button className="enroll-btn" onClick={() => onEnroll(id)}>Enroll</button>
        </div>
    );
};

export default CourseCard;
