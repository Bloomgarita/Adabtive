import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
  // Removed unused Icon import
} from '@mui/material';
// Revert to standard MUI icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AboutUsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={3}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          sx={{
            maxWidth: { md: '780px' },
            mx: { xs: 'auto', md: 0 },
          }}
        >
          <Chip
            label="about us"
            sx={{
              bgcolor: 'secondary.main',
              color: 'common.black',
              typography: 'caption',
              borderRadius: '8px',
              height: 'auto',
              '& .MuiChip-label': {
                padding: '6px 10px',
              },
            }}
          />

          <Stack spacing={4.5}>
            <Typography variant="h2" component="h2">
              We are Adabtive
            </Typography>
            <Stack spacing={2.5}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.33 }}
              >
                A team of passionate software developers with the ambition to
                make a positive difference for you and for society. We build
                software that works for people in every way. Websites, apps,
                system integrations — you name it, we develop and deliver it.
                We’re capable of a lot and, when needed, we tap into the
                expertise of other companies within our family of specialized IT
                businesses.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Just tell us what you need — we’re happy to help!
              </Typography>
            </Stack>
            <Button
              variant="text"
              color="primary"
              // Use standard MUI icon
              endIcon={<ArrowForwardIcon />} // Reverted icon
              sx={{
                typography: 'button',
                p: 0,
                alignSelf: 'flex-start',
                '&:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
