import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Basic from './Basic'; // Correct path to Basic component
import Signin from './Signin';
import Signup from './Signup';
import AdminHome from './HomePages/AdminHome';
import FacultyHome from './HomePages/FacultyHome';
import StudentHome from './HomePages/StudentHome';
import AddFacultyPage from './HomePages/AddFacultyPage';
import ViewFacultyPage from './HomePages/ViewFacultyPage';
import ViewUsersPage from './HomePages/ViewUsersPage';
import ViewFeedbackPage from './HomePages/ViewFeedbackPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import TeamPage from './TeamPage';

const RouteComponent = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Basic />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Admin Routes */}
        <Route path="/adminh" element={<AdminHome />} />
        <Route path="/addfaculty" element={<AddFacultyPage />} />
        <Route path="/viewfaculty" element={<ViewFacultyPage />} />
        <Route path="/viewusers" element={<ViewUsersPage />} />
        <Route path="/viewfeedback" element={<ViewFeedbackPage />} />

        {/* Faculty Routes */}
        <Route path="/facultyh" element={<FacultyHome />} />
        
        {/* Student Routes */}
        <Route path="/studenth" element={<StudentHome />} />
        
        {/* Static Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
};

export default RouteComponent;
