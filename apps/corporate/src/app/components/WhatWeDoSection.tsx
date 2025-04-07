import React from 'react';
import { Box, Container, Typography, Grid, Theme } from '@mui/material';

const WhatWeDoSection = () => {
  return (
    <Box
      sx={(theme: Theme) => ({
        padding: theme.spacing(10, 0),
        backgroundColor: theme.palette.background.paper, // Use paper background for contrast
        color: theme.palette.text.primary,
      })}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          display="block"
          color="primary"
          gutterBottom
          align="center"
        >
          OUR SERVICES
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          align="center"
          sx={{ fontWeight: 'bold', mb: 4 }}
        >
          What We Do
        </Typography>
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: 'text.secondary' }}
            >
              We build web applications and mobile apps, model complex data
              models, and create scalable cloud solutions. In fact, we build any
              kind of digital solution that makes businesses run better. We are
              adaptive and challenge ourselves to find the best path to get
              there.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: 'text.secondary' }}
            >
              For collaboration means being a long term partner, help each other
              improve and grow. We also take on just one part of the process,
              it's up to you.
            </Typography>
          </Grid>
          {/* Right Column */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: 'text.secondary' }}
            >
              The solutions we build often address specific needs. For this, we
              use modern technologies and proven best practices. We believe that
              quality is the best path to get there. For collaboration means
              being a long term partner, help each other improve and grow.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: 'text.secondary' }}
            >
              We also take on just one part of the process, it's up to you. We
              can also take on maintenance & management. Very neat too, that we
              can also take on just one part of the process, it's up to you.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeDoSection;
