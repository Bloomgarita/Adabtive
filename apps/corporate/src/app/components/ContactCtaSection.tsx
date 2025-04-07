import React from 'react';
import { Box, Container, Typography, Button, Theme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ContactCtaSection = () => {
  return (
    <Box
      sx={(theme: Theme) => ({
        backgroundColor: theme.palette.grey[900], // Darker background for this section
        color: theme.palette.common.white,
        padding: theme.spacing(8, 0),
        textAlign: 'center',
      })}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 1 }}
        >
          Interested?
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{ mb: 4, color: 'text.secondary' }}
        >
          Contact us for information
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{ padding: '12px 32px' }} // Larger padding
        >
          Contact us
        </Button>
      </Container>
    </Box>
  );
};

export default ContactCtaSection;
