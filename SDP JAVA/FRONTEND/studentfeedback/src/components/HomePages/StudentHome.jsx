import React from 'react';
// import ResponsiveAppBar from '../ResponsiveAppBar';
import ResponsiveAppBarS from '../ResponsiveAppBarS';

const StudentHome = () => {
  return (
    <div>
      <ResponsiveAppBarS />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to Student Home Page</h1>
        {/* Add any student-specific content here */}
      </div>
    </div>
  );
};

export default StudentHome;
