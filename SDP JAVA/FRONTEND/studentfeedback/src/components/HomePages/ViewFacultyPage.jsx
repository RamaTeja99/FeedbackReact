import React from 'react';
import { Box, Typography } from '@mui/material';

const ViewFacultyPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        View Faculty
      </Typography>
      <Typography variant="body1">
        Here you can view the list of all faculty members in the system.
      </Typography>
    </Box>
  );
};

export default ViewFacultyPage;
