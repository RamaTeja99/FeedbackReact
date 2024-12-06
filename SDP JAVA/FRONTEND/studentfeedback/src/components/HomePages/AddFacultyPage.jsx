import React from 'react';
import { Box, Typography } from '@mui/material';
import ResponsiveAppBarA from "../RespnsiveAppBarA"; // Navigate one level up

const AddFacultyPage = () => {
  return (
    <div>
      {/* Navbar */}
      <ResponsiveAppBarA />

      {/* Page content */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Add Faculty
        </Typography>
        <Typography variant="body1">
          This page allows you to add new faculty members to the system.
        </Typography>
      </Box>
    </div>
  );
};

export default AddFacultyPage;
