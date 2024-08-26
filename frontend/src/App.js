import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignupPage from './components/SignupPage';
import CoursesPage from './components/CoursesPage';
import CourseDetails from './components/CourseDetails';
import AboutPage from './components/AboutPage';  
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
import PhotoGalleryPage from './components/PhotoGalleryPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId/details" element={<CourseDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/photo-gallery" element={<PhotoGalleryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
