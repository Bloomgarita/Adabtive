import React from 'react';
import { Box, Container, Typography, Button, Stack, Icon } from '@mui/material'; // Keep Icon import if needed elsewhere
// Revert to standard MUI icon
import StarIcon from '@mui/icons-material/Star';

const ContactCtaSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: 'common.black',
        color: 'common.white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Placeholder for background image/elements */}
      {/* TODO: Implement background image/elements */}

      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 4 }}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            bgcolor: 'common.black',
            borderRadius: '10px',
            p: { xs: 4, md: 6 },
            position: 'relative',
            zIndex: 1,
          }}
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
            // Use standard MUI icon
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
      </Container>
    </Box>
  );
};

export default ContactCtaSection;
