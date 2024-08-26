import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import './CoursesPage.css';

const CoursesPage = () => {
    const [enrolledCourse, setEnrolledCourse] = useState(null);

    useEffect(() => {
        
        const fetchEnrolledCourse = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/enrolled-course');
                const data = await response.json();
                setEnrolledCourse(data.courseId);
            } catch (error) {
                console.error('Failed to fetch enrolled course:', error);
            }
        };

        fetchEnrolledCourse();
    }, []);

    const handleEnroll = async (courseId) => {
        if (enrolledCourse) {
            alert('Enroll only one course only');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/enroll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ courseId }),
            });

            if (response.ok) {
                alert('Enrolled successfully!');
                setEnrolledCourse(courseId);
            } else {
                alert('Failed to enroll in the course.');
            }
        } catch (error) {
            console.error('Enrollment error:', error);
            alert('Error connecting to the server. Please try again later.');
        }
    };

    const courses = [
        { id:1, image: require('../assests/ds.jpeg'), title: 'Data Science', description: 'Learn Data Science with Python and more...' },
        { id:2, image: require('../assests/python.webp'), title: 'Python', description: 'Master Python programming for various applications...' },
        { id:3, image: require('../assests/java.jpeg'), title: 'Java', description: 'Comprehensive Java course from beginner to advanced...' },
        { id:4, image: require('../assests/fsd.jpeg'), title: 'Full Stack Development', description: 'Become a full stack developer with hands-on projects...' },
        { id:5, image: require('../assests/ai.jpeg'), title: 'Artificial Intelligence', description: 'Dive into AI with Microsoft Azure certification...' },
        { id:6, image: require('../assests/aiml.jpeg'), title: 'Machine Learning', description: 'Understand ML concepts and apply them to real-world scenarios...' },
        { id:7, image: require('../assests/iot1.jpeg'), title: 'Internet of Things (IoT)', description: 'Learn IoT and build innovative projects...' },
        { id:8, image: require('../assests/vlsi1.jpeg'), title: 'VLSI Design', description: 'Get started with VLSI Design and explore various applications...' },
        { id:9,image: require('../assests/dsa.jpeg'), title: 'Data Structures (DSA)', description: 'Master DSA concepts and improve your coding skills...' },
        { id:10,image: require('../assests/uisx.jpeg'), title: 'UI/UX Design', description: 'Create stunning user interfaces and improve user experience...' },
        { id:11,image: require('../assests/st1.jpeg'), title: 'Software Testing', description: 'Learn software testing methodologies and tools...' },
        { id:12,image: require('../assests/sql.jpeg'), title: 'SQL', description: 'Understand SQL and work with databases effectively...' },
        { id:13,image: require('../assests/cs.jpeg'), title: 'Cyber Security', description: 'Explore the world of cybersecurity and ethical hacking...' },
        // Add more courses 
    ];

    return (
        <div className="courses-container">
            {courses.map((course) => (
                <CourseCard 
                    key={course.id}
                    id={course.id}
                    image={course.image}
                    title={course.title}
                    description={course.description}
                    onEnroll={handleEnroll}
                />
            ))}
        </div>
    );
};

export default CoursesPage;
