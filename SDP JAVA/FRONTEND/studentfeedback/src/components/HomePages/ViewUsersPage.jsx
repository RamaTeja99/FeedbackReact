import React from 'react';
import { Box, Typography } from '@mui/material';

const ViewUsersPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        View Users
      </Typography>
      <Typography variant="body1">
        This page allows you to view all the users of the system.
      </Typography>
    </Box>
  );
};

export default ViewUsersPage;
