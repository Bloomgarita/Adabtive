import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material'; // Removed Grid import

const HowWeDoItSection = () => {
  const cardData = [
    {
      title: 'Peace of mind',
      description: `We always aim for balance. As a company, but especially as individuals. Because when we’re feeling good, we enjoy our work more—and that leads to better solutions for our clients. And our attention to peace of mind goes beyond work. We also value this in our roles outside of work —as partners, friends, and parents.`,
    },
    {
      title: 'Business savviness',
      description: `Let’s be real—we’re running a business. Our business. So everything we do must make sense from a business perspective.`,
    },
    {
      title: 'Fun',
      description: `We want to have fun in everything we do. Because if we don’t enjoy our work, why do it at all? Fortunately, we really do enjoy building software. And to keep it that way, we constantly ask ourselves: Does this spark joy? Yes? Let’s go! No? Let it go!`,
    },
  ];

  // Calculate spacing value based on theme (assuming default spacing unit is 8px)
  // 22px gap / 8px = 2.75
  const cardSpacing = 2.75;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems={{ xs: 'center', md: 'flex-start' }}>
          {/* Title and Subtitle Stack */}
          <Stack
            spacing={3.25}
            sx={{
              maxWidth: { md: '610px' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h3" component="h2">
              How we do
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {' '}
              {/* Changed color to text.secondary */}
              We want to do what we say and deliver what we promise. Every
              decision we make as a company is guided by our three core values:
            </Typography>
          </Stack>

          {/* Cards Row using Stack */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={cardSpacing} // Use calculated spacing
            alignItems="stretch" // Stretch items to have same height if needed
            justifyContent="center" // Center items if they don't fill width
            sx={{ width: '100%' }} // Ensure stack takes full width
          >
            {cardData.map((card, index) => (
              // Each card is a Box within the row Stack
              <Box
                key={index}
                sx={{
                  width: {
                    xs: '100%',
                    // Add explicit Theme type
                    md: `calc(100% / 3 - ${(
                      theme: import('@mui/material').Theme
                    ) => theme.spacing((cardSpacing * 2) / 3)})`,
                  }, // Calculate width for 3 columns minus spacing
                  // Alternatively use flexBasis:
                  // flexBasis: { xs: '100%', md: `calc(33.333% - ${theme.spacing(cardSpacing * 2 / 3)})` },
                  // flexGrow: 1, // Allow items to grow if needed
                }}
              >
                {/* Internal Card Stack */}
                <Stack spacing={1.75}>
                  <Typography variant="h4" component="h3">
                    {card.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {card.description}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Stack>

          {/* Final Text */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              maxWidth: { md: '800px' },
              textAlign: { xs: 'center', md: 'left' },
              pt: 4,
            }}
          >
            When people are trusted with responsibility, they step up. Then,
            there’s no need for managers , just a self-steering group of people
            working not for a boss, but for a shared vision. That’s Adabtion.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default HowWeDoItSection;
