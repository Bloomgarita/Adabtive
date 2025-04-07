import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Theme,
} from '@mui/material'; // Added Theme import
// Removed styled import: import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/* // Removed HeroWrapper definition
const HeroWrapper = styled(Box)(({ theme }) => ({
  // Placeholder for background image - using dark gradient for now
  background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('/path/to/your/hero-image.jpg')`, // Replace with actual image path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: theme.palette.common.white,
  padding: theme.spacing(15, 0), // Adjust vertical padding as needed
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(10, 2), // Less padding on mobile
    textAlign: 'left',
  },
}));
*/

/* // Removed Subtitle definition
const Subtitle = styled(Typography)(({ theme }) => ({
  maxWidth: '600px',
  margin: 'auto',
  marginBottom: theme.spacing(4),
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    marginLeft: 0,
    marginRight: 0,
  },
}));
*/

/* // Removed HeroButton definition
const HeroButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1, 3),
}));
*/

const HeroSection = () => {
  return (
    <Box // Using standard Box with sx prop
      sx={{
        // Replicate some basic styles for testing
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))`,
        color: 'common.white',
        padding: { xs: '80px 16px', md: '120px 0' }, // theme.spacing(10, 2) and theme.spacing(15, 0)
        textAlign: { xs: 'left', md: 'center' },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          EMPOWERING
          <br />
          YOUR BUSINESS
        </Typography>
        <Typography // Using standard Typography with sx prop instead of Subtitle
          variant="h6"
          component="p"
          sx={(theme: Theme) => ({
            // Added Theme type annotation
            maxWidth: { xs: '100%', md: '600px' },
            margin: { xs: '0 0 32px 0', md: 'auto' }, // theme.spacing(4) bottom margin
            marginBottom: 4, // theme.spacing(4)
            color: 'text.secondary',
          })}
        >
          We are Adabtive, your owner-operated software developers committed to
          moving forward effective and sustainable solutions.
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button // Using standard Button with sx prop instead of HeroButton
            variant="contained"
            color="primary"
            size="large"
            sx={{ margin: 1, padding: '8px 24px' }} // theme.spacing(1) margin, theme.spacing(1, 3) padding
          >
            Learn more
          </Button>
          <Button // Using standard Button with sx prop instead of HeroButton
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ margin: 1, padding: '8px 24px' }} // Added sx prop with styles
          >
            Our services
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
