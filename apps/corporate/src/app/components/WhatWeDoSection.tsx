import React from 'react';
import { Box, Container, Typography, Stack, Chip } from '@mui/material'; // Use Stack instead of Grid, add Chip

const WhatWeDoSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 }, // Adjust vertical padding
        bgcolor: 'background.default', // Match Figma background
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        {/* Use Stack for row layout based on Figma layout_FYREPN */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 12.5 }} // 100px gap / 8 = 12.5
          alignItems={{ xs: 'center', md: 'flex-start' }} // Align items based on Figma
          justifyContent="center" // Center content horizontally
        >
          {/* Left Column (Group 1660:331) */}
          <Stack
            spacing={2} // Adjust spacing between tag, title, text
            sx={{
              maxWidth: { md: '450px' }, // Estimate width based on Figma proportions
              textAlign: { xs: 'center', md: 'left' },
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            {/* Tag (Frame 48096023) */}
            <Chip
              label="our Services"
              sx={{
                bgcolor: 'secondary.main', // Figma fill_ZVCJB5 (#F0F98F mapped to secondary.main)
                color: 'common.black', // Figma fill_QWXISC
                typography: 'caption', // Figma style_PV6EAI
                borderRadius: '5px', // Figma borderRadius
                height: 'auto', // Adjust height to fit content
                '& .MuiChip-label': {
                  // Target label for padding
                  padding: '6px 10px', // Figma padding
                },
              }}
            />
            {/* Title (1660:334) */}
            <Typography variant="h3" component="h2">
              {' '}
              {/* Use h3 style from theme */}
              What we do
            </Typography>
            {/* Description (1660:332) */}
            <Typography
              variant="body1" // Use body1, adjust style if needed
              color="text.secondary" // Figma fill_AFFKP0
              sx={{ fontSize: '17px', lineHeight: 1.36 }} // Match style_S28X07
            >
              We’re seasoned tech experts. We build web applications that make
              complex data models and data flows accessible and manageable in an
              intuitive way. We don’t shy away from complicated challenges. In
              fact, we love sinking our teeth into them.
            </Typography>
          </Stack>

          {/* Right Column (Text 1660:330) */}
          <Box sx={{ maxWidth: { md: '600px' } }}>
            {' '}
            {/* Estimate width */}
            <Typography
              variant="body1" // Figma style_WI5PYG
              color="text.secondary" // Figma fill_AFFKP0
              paragraph // Adds bottom margin
            >
              The solutions we build often address specific needs. For this, we
              use modern technologies and proven best practices. And we draw
              from years of experience as consultants— we’ve taken on many
              complex projects before. Contributing to the greater good starts
              with long-term relationships. That’s why we listen attentively and
              think critically with our clients. Do you really need what you
              think you need? What will actually help you? And what’s the best
              path to get there? For us, collaboration means having a long-term
              perspective.
            </Typography>
            <Typography
              variant="body1" // Figma style_WI5PYG
              color="text.secondary" // Figma fill_AFFKP0
            >
              We mainly support startups and growing organizations. We’re
              flexible in how we work together. We can be involved throughout
              the entire journey—from strategy and development to maintenance.
              We’d love that. But we can also take on just one part of the
              process. It’s up to you.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default WhatWeDoSection;
