import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material'; // Removed unused Icon import
// Revert to standard MUI icon
import StarIcon from '@mui/icons-material/Star';
// Removed image import

const ContactCtaSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        position: 'relative', // Needed for overlay
        overflow: 'hidden',
        color: 'common.white', // Text is white over the dark background/overlay
        // Apply background image using absolute path from public dir
        backgroundImage: `url(/HeroBg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          // Add dark overlay
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust opacity as needed
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {' '}
        {/* Content above overlay */}
        {/* Inner Box with black background and border radius */}
        <Box
          sx={{
            bgcolor: 'common.black', // Figma fill_QWXISC
            borderRadius: '10px', // Figma borderRadius
            p: { xs: 4, md: 6 }, // Padding inside the black box
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 4 }}
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Text Content Stack */}
            <Stack
              spacing={1.125}
              sx={{
                maxWidth: { md: '576px' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h2" component="h2">
                Interested? <br /> Contact us for information
              </Typography>
              <Typography variant="body1">
                We are eager to learn more about your vision and how we can help
                you bring it to life.
              </Typography>
            </Stack>

            {/* Contact Button */}
            <Button
              variant="contained"
              color="primary"
              startIcon={<StarIcon />} // Reverted icon
              sx={{
                typography: 'button',
                padding: '14px 26px',
                borderRadius: '10px 10px 0px 10px',
                alignSelf: { xs: 'center', md: 'center' },
                whiteSpace: 'nowrap',
              }}
            >
              Contact us
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactCtaSection;
