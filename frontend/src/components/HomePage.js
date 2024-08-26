import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import img1 from '../assests/vlsi1.jpeg';
import img2 from '../assests/autocad.jpg';
import img3 from '../assests/farmer.jpg';
import img4 from '../assests/ds.jpeg';
import img5 from '../assests/hospital.jpg';
import img6 from '../assests/IOT.jpg';
import img7 from '../assests/python.webp';
import img8 from '../assests/web.jpg';
import mainImage from '../assests/1234.png'; 
import './homepage.css';

const stats = [
  { label: 'Students Undergoing Training', value: 300, color: '#FFDAB9' }, 
  { label: 'Students Completed Training', value: 1000, color: '#FFB6C1' }, 
  { label: 'Students Placed', value: 300, color: '#FFFACD' }, // LemonChiffon
  { label: 'Courses', value: 28, color: '#E0FFFF' }, // LightCyan
  { label: 'Ongoing Batches', value: 25, color: '#E6E6FA' }, // Lavender
  { label: 'Trainers', value: 135, color: '#F5DEB3' }  // Wheat
];


const projects = [
  { id: 1, image: img1, heading: 'VLSI Design', subheading: 'AXI to APB bridge -- Project Completed' },
  { id: 2, image: img2, heading: 'Auto CAD AND SOLID WORKS', subheading: 'AUTONOMOUS GUIDED FORKLIFT VEHICLE FOR WAREHOUSES - Project Complete' },
  { id: 3, image: img3, heading: 'ANDROID APP DEVELOPMENT', subheading: 'Building Farmer Connect App - Project Completed' },
  { id: 4, image: img4, heading: 'Project Data Science & Data Analytics', subheading: 'Unlocking Insights: SURE Trust Student Data Analytics-Project Completed ' },
  { id: 5, image: img5, heading: 'JAVA', subheading: 'Hospital Management System Project - Project Completed' },
  { id: 6, image: img6, heading: 'EMBEDDED SYSTEMS & IOT', subheading: 'IoT Gateway -Projects Completed' },
  { id: 7, image: img7, heading: 'Python', subheading: 'IERY Outreach Project - Completed' },
  { id: 8, image: img8, heading: 'WEB DEVELOPMENT', subheading: 'Building a website newly started Super Speciality Hospital - Project Completed' }
];

const additionalInfo = [
  {
    title: 'SURE Trust signed up on the NGO-DARPAN and a registered entity on MCA portal for Undertaking CSR Activities',
    content: 'The NGO-DARPAN is a platform that provides space for interface between VOs/NGOs and key Government Ministries / Departments / Government Bodies. SURE Trust is registered with the MCA portal with the registration id: CSR00039792, and is eligible to undertake CSR activities.'
  },
  {
    title: 'SURE Trust Internships are accessible on AICTE Portal',
    content: 'SURE Trust offers free online: 4 months training for skill upgradation and 2 months full-time internship after the training, 4 months training for skill upgradation and 4 months part-time internship after the training.'
  },
  {
    title: 'SURE Trust is NGO Partner with TATA Group of Companies',
    content: 'TATA Proengage team opens the volunteering opportunities in SURE Trust to all their employees across the globe, once in six months. Employees from different levels of management volunteer to support SURE Trust in various capacities as Trainers, Mentors, Advisors, and so on.'
  },
  {
    title: 'Vision of SURE Trust',
    content: 'Enhancing the employability of educated unemployed rural youth through “Human values-based skill up-gradation in emerging technologies, with no cost to students."'
  }
];
const collaborators = [
  { name: 'AstraZeneca', url: 'https://www.astrazeneca.com', color: '#4F7CA1' }, // Light Steel Blue
  { name: 'Redapricot', url: 'https://www.redapricot.com', color: '#F08080' }, // Light Coral
  { name: 'Check.in', url: 'https://www.check.in', color: '#A899A5' }, // Thistle
  { name: 'Lokibots', url: 'https://www.lokibots.com', color: '#66CDAA' }, // Medium Aquamarine
  { name: 'Onusworks', url: 'https://www.onusworks.com', color: '#69B1F3' }, // Sky Blue
  { name: 'Digital Ocean', url: 'https://www.digitalocean.com', color: '#80BFFF' }, // Light Sky Blue
  { name: 'TAFE', url: 'https://www.tafe.com', color: '#FFA07A' }, // Light Salmon
  { name: 'TATA Group of Companies', url: 'https://www.tata.com', color: '#A9A9A9' } // Dark Gray
];

const quotations = [
  'SURE Trust Internships are accessible AICTE Portal',
  'SURE Trust internships are approved by AICTE and you can find them on AICTE Internship portal by typing SURE Trust - Anantapur, Corporate employees with skills in emerging technologies can volunteer to train the educated & unemployed rural youth on SURE Trust Platform'
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [quotationIndex, setQuotationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuotationIndex((prevIndex) => (prevIndex + 1) % quotations.length);
    }, 30000); 

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (index) => setOpenIndex(index);
  const handleMouseLeave = () => setOpenIndex(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + projects.length) % projects.length);
  };

  // Display projects in pairs, wrapping around
  const visibleProjects = [
    projects[(currentIndex + 0) % projects.length],
    projects[(currentIndex + 1) % projects.length],
  ];

  return (
    <div className="home-page">
      <Navbar />
      <div className="home-container">
        <div className="left-content">
          <div className="text-background">
            <h1 className="t1">Welcome to SureTrust</h1>
            <p>Empowering Students with Free Technology Education</p>
          </div>
          
          <div className="button-container">
            <Link to="/login">
                <button className="btn get-started-btn">Get Started</button>
            </Link>
            <Link to="/courses" className="explore-link">
                <button className="explore-courses-btn">Explore Courses</button>
            </Link>
          </div>

          
        </div>
        <div className="right-image-container">
          <img src={mainImage} alt="Main Visual" className="right-image" />
        </div>
      </div>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-box"
            style={{ backgroundColor: stat.color }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="stat-label">
              <h3>{stat.label}</h3>
            </div>
            {openIndex === index && (
              <div className="stat-dropdown">
                <p>{stat.value}+</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="internship-projects">
        <h2>Internship Projects</h2>
      </div>

      <div className="carousel-container">
        <button className="carousel-button prev" onClick={handlePrev}>&lt;</button>
        <div className="carousel-projects">
          {visibleProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.heading} className="project-image" />
              <h3>{project.heading}</h3>
              <p>{project.subheading}</p>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={handleNext}>&gt;</button>
      </div>

      <div className="additional-info-section">
        {additionalInfo.map((info, index) => (
          <div key={index} className="info-box">
            <h3>{info.title}</h3>
            <p>{info.content}</p>
          </div>
        ))}
      </div>

      <div className="collaborators-section">
        <h2 className="collaborators-title">Collaborators</h2>
        <div className="collaborators-container">
          {collaborators.map((collaborator, index) => (
            <a
              key={index}
              href={collaborator.url}
              target="_blank"
              rel="noopener noreferrer"
              className="collaborator-box"
              style={{ backgroundColor: collaborator.color }}
            >
              {collaborator.name}
            </a>
          ))}
        </div>
      </div>

      <div className="quotations-container">
        <div className="quotation-box">
          <p>{quotations[quotationIndex]}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
