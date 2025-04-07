import React from 'react';
import { Box, Container, Typography, Grid, Paper, Theme } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Example icon

const SectionItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Paper
    elevation={3}
    sx={(theme: Theme) => ({
      padding: theme.spacing(3),
      backgroundColor: theme.palette.background.paper,
      height: '100%', // Ensure papers have same height in a row
    })}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <CheckCircleOutlineIcon color="primary" sx={{ mr: 1 }} />
      <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
    </Box>
    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
      {children}
    </Typography>
  </Paper>
);

const HowWeDoItSection = () => {
  return (
    <Box
      sx={(theme: Theme) => ({
        padding: theme.spacing(10, 0),
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      })}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          align="center"
          sx={{ fontWeight: 'bold', mb: 6 }} // Increased bottom margin
        >
          How We Do It
        </Typography>
        <Grid container spacing={4} alignItems="stretch">
          {' '}
          {/* Use alignItems="stretch" */}
          <Grid item xs={12} md={4}>
            <SectionItem title="Peace Of Mind">
              We always deliver excellence. As a company, but especially as
              individuals. Because when you bring good solutions for work, life
              becomes more fun. And that tends to bring good solutions for work.
              So everything we do must make sense. For our partners, friends and
              family.
            </SectionItem>
          </Grid>
          <Grid item xs={12} md={4}>
            <SectionItem title="Business Savviness">
              Let's be real - we're running a business. Our solutions must make
              business sense. Common sense dictates that we must deliver value.
            </SectionItem>
          </Grid>
          <Grid item xs={12} md={4}>
            <SectionItem title="Fun">
              We want to have fun in everything we do. Because if we don't
              really enjoy our work, why do it then? Fortunately, we really do
              enjoy building software solutions. We believe that a positive
              attitude leads to better results.
            </SectionItem>
          </Grid>
        </Grid>
        {/* Optional: Add the "Holistic approach" text below the grid if needed */}
        <Typography
          variant="body1"
          align="center"
          sx={{ mt: 6, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}
        >
          Holistic approach is why we give our team the freedom to work when and
          where they want. We believe that happy developers build better
          software. So everything we do must make sense. For our partners,
          friends and family. We are a growing group of people with a shared
          vision.
        </Typography>
      </Container>
    </Box>
  );
};

export default HowWeDoItSection;
