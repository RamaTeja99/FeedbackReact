import React from 'react';
import { Box, Typography } from '@mui/material';

const ViewFeedbackPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        View Feedback
      </Typography>
      <Typography variant="body1">
        Here you can view feedback submitted by users.
      </Typography>
    </Box>
  );
};

export default ViewFeedbackPage;
