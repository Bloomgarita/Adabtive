import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
// Revert to standard MUI icons
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// Removed image imports

const HeroSection = () => {
  // Conditionally set base path for images
  const isProduction = process.env['NODE_ENV'] === 'production';
  const basePath = isProduction ? '/Adabtive' : '';

  return (
    <Box
      sx={{
        position: 'relative',
        color: 'text.primary',
        overflow: 'hidden',
        // Apply background image using conditional path
        backgroundImage: `url(${basePath}/HeroBg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pt: { xs: 10, md: `calc(112px + 80px)` },
        pb: { xs: 10, md: 20 },
        '&::before': {
          // Add dark overlay
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(rgba(13, 13, 13, 0.8), rgba(29, 29, 29, 0.9))',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Text Content Stack */}
          <Stack
            spacing={3.75}
            sx={{
              maxWidth: { md: '538px' },
              textAlign: { xs: 'center', md: 'left' },
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Typography variant="h1" component="h1">
              Empowering YOUR BUSINESS
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We are the Netherlands' first steward-owned software developer,
              committed to creating positive change. We deliver ethical,
              effective, and sustainable solutions tailored to your needs
            </Typography>
            {/* Button Stack */}
            <Stack direction="row" spacing={1.25} sx={{ pt: 1.25 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<StarIcon />}
                sx={{
                  typography: 'button',
                  padding: '14px 26px',
                  borderRadius: '10px 10px 0px 10px',
                }}
              >
                Contact us
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  typography: 'button',
                  padding: '14px 26px',
                  borderRadius: '8px 8px 0px 8px',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  '&:hover': {
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    bgcolor: 'transparent',
                  },
                }}
              >
                Learn more
              </Button>
            </Stack>
          </Stack>

          {/* Actual Image using conditional path */}
          <Box
            component="img"
            src={`${basePath}/HeroImage.svg`} // Use conditional path
            alt="Hero Image"
            sx={{
              width: { xs: '80%', sm: '60%', md: '45%' },
              maxWidth: '500px',
              height: 'auto',
              borderRadius: '30px',
              display: { xs: 'none', md: 'block' },
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
