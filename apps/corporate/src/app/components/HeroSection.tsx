import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
// Revert to standard MUI icons
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroSection = () => {
  // Removed unused theme and isMobile variables
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
        color: 'text.primary',
        overflow: 'hidden',
        pt: { xs: 10, md: `calc(112px + 80px)` },
        pb: { xs: 10, md: 15 },
      }}
    >
      {/* Background Elements Placeholder */}
      {/* TODO: Implement Figma background elements */}

      <Container maxWidth="lg">
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
                // Use standard MUI icon
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
                // Use standard MUI icon
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

          {/* Image Placeholder */}
          <Box
            sx={{
              width: { md: '50%' },
              height: { xs: 200, md: 400 },
              bgcolor: 'grey.900',
              borderRadius: '30px',
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Typography sx={{ p: 2 }}>Image Placeholder</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
