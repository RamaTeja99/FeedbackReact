import React  from "react";
import ResponsiveAppBar from "../ResponsiveAppBar";

const FacultyHome = () => {
    return (
      <div>
        <ResponsiveAppBar />
        <div style={{ padding: '20px' }}>
          <h1>Welcome to Faculty Home Page</h1>
          {/* Add any faculty-specific content here */}
        </div>
      </div>
    );
  };
  
  export default FacultyHome;