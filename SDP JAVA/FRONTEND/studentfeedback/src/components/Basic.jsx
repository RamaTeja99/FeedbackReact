import React from 'react';
import './Basic.css'; 

const Basic = () => {
  return (
    <div className="basic-container">
      <nav className="navbar">
        <ul>
          <li><a href="/Basic">Home</a></li>
          <li><a href="/AboutPage">About</a></li>
          <li><a href="/TeamPage">Team</a></li>
          <li><a href="/ContactPage">Contact</a></li>
          <li><a href="/Signup">Login</a></li>
        </ul>
      </nav>

      <div className="main-content">
        <img 
          src="assets\student-feedback-app.jpg" 
          alt="Feedback System" 
          className="main-image" 
        />
        <h1>Welcome to the Student Feedback System</h1>
        <p>Providing a platform to share valuable feedback efficiently.</p>
      </div>
    </div>
  );
};

export default Basic;