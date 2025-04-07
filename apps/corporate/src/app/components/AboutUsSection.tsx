import React from 'react';
import { Box, Container, Typography, Button, Grid, Theme } from '@mui/material'; // Added Theme import
// Removed styled import: import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/* // Removed SectionWrapper definition
const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.default, // Or slightly different if needed
  color: theme.palette.text.primary,
}));
*/

/* // Removed SectionTitle definition
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
  position: 'relative',
  display: 'inline-block',
  '&::before': {
    // Yellow underline effect
    content: '""',
    position: 'absolute',
    bottom: '-5px',
    left: 0,
    width: '50px',
    height: '4px',
    backgroundColor: theme.palette.primary.main,
  },
}));
*/

/* // Removed PlaceholderBox definition
const PlaceholderBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800], // Placeholder color
  width: '100%',
  paddingTop: '75%', // Aspect ratio placeholder (adjust as needed)
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
}));
*/

const AboutUsSection = () => {
  return (
    <Box // Using standard Box with sx prop instead of SectionWrapper
      sx={(theme: Theme) => ({
        // Added Theme type annotation
        padding: theme.spacing(10, 0),
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      })}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            {/* Placeholder for image/graphic */}
            <Box // Using standard Box with sx prop instead of PlaceholderBox
              sx={(theme: Theme) => ({
                // Added Theme type annotation
                backgroundColor: theme.palette.grey[800],
                width: '100%',
                paddingTop: '75%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.text.secondary,
                [theme.breakpoints.down('md')]: {
                  marginBottom: theme.spacing(4),
                },
              })}
            >
              <Typography>Image/Graphic</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              display="block"
              color="primary"
              gutterBottom
            >
              ABOUT US
            </Typography>
            <Typography // Using standard Typography with sx prop instead of SectionTitle
              variant="h2"
              component="h2"
              gutterBottom
              sx={(theme: Theme) => ({
                // Added Theme type annotation
                fontWeight: 'bold',
                marginBottom: theme.spacing(1),
                position: 'relative',
                display: 'inline-block',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-5px',
                  left: 0,
                  width: '50px',
                  height: '4px',
                  backgroundColor: theme.palette.primary.main,
                },
              })}
            >
              We are Adabtive
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: 'text.secondary' }}
            >
              A team of passionate software developers with the ambition to make
              a positive difference for you and for society. We develop and
              deliver well-designed software solutions.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: 'text.secondary' }}
            >
              Through co-creation and delivery, we are capable of a fast time to
              market. If needed, we tap into the expertise of other companies
              within our family of specialized IT businesses. Just tell us what
              you need and we're happy to help!
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ mt: 2 }}
            >
              Our services
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
