import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton, // Added ListItemButton import
  ListItemText,
  ListItemIcon,
  Theme, // Added Theme import
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Removed styled import
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language'; // Placeholder for language
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import HeroSection from './components/HeroSection'; // Import the HeroSection
import AboutUsSection from './components/AboutUsSection'; // Import the AboutUsSection
import WhatWeDoSection from './components/WhatWeDoSection'; // Import the WhatWeDoSection
import ContactCtaSection from './components/ContactCtaSection'; // Import the ContactCtaSection
import HowWeDoItSection from './components/HowWeDoItSection'; // Import the HowWeDoItSection

// Define a basic theme based on the design (adjust colors as needed)
const theme = createTheme({
  palette: {
    mode: 'dark', // Based on the dark background
    primary: {
      main: '#E0B828', // Yellow color from buttons/highlights
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1E1E1E', // Slightly lighter dark for surfaces like AppBar
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: 'inherit', // Use system fonts or specify one
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none', // Buttons in design don't seem uppercase
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Square buttons
        },
        containedPrimary: {
          color: '#000000', // Black text on yellow button
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black
          boxShadow: 'none',
        },
      },
    },
  },
});

/* // Removed Logo definition
const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  flexGrow: 1, // Pushes other items to the right
  cursor: 'pointer',
}));
*/

/* // Removed NavLink definition
const NavLink = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: theme.spacing(0, 1),
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));
*/

/* // Removed TopBarInfo definition
const TopBarInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginRight: theme.spacing(2),
}));
*/

const navItems = ['Home', 'About Us', 'Our Services', 'Our Team', 'Contacts'];

export function App() {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [langAnchorEl, setLangAnchorEl] = React.useState<null | HTMLElement>(
    null
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLangMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleLangMenuClose = () => {
    setLangAnchorEl(null);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', bgcolor: 'background.paper', height: '100%' }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        LOGO
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, borderTop: '1px solid grey' }}>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleLangMenuOpen}>
          <LanguageIcon />
        </IconButton>
        <IconButton color="inherit">
          <MailOutlineIcon sx={{ mr: 0.5 }} />
        </IconButton>
        <IconButton color="inherit">
          <PhoneIcon sx={{ mr: 0.5 }} />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar component="nav" position="sticky" sx={{ bgcolor: '#000' }}>
        {' '}
        {/* Darker background for AppBar */}
        <Container maxWidth="lg">
          {/* Top Bar for Desktop */}
          {!isMobile && (
            <Toolbar
              variant="dense" // Makes the top bar shorter
              disableGutters
              sx={{
                justifyContent: 'flex-end', // Align items to the right
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // Subtle separator
                minHeight: '40px', // Adjust height as needed
                px: 2, // Add some padding
              }}
            >
              <Box // Using Box with sx instead of TopBarInfo
                sx={(theme: Theme) => ({
                  // Added Theme type
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing(2),
                  // marginRight: theme.spacing(2), // Removed margin, handled by justify/gap
                })}
              >
                <Button
                  color="inherit"
                  size="small" // Smaller button for top bar
                  startIcon={<LanguageIcon />}
                  onClick={handleLangMenuOpen}
                  sx={{ fontSize: '0.8rem' }} // Smaller text
                >
                  EN
                </Button>
                <Menu
                  anchorEl={langAnchorEl}
                  open={Boolean(langAnchorEl)}
                  onClose={handleLangMenuClose}
                >
                  <MenuItem onClick={handleLangMenuClose}>EN</MenuItem>
                  {/* Add other languages here */}
                </Menu>
                <Typography
                  variant="body2"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                  }} // Smaller text
                >
                  <MailOutlineIcon sx={{ mr: 0.5, fontSize: '1rem' }} />
                  iam@adabtive.nl
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                  }} // Smaller text
                >
                  <PhoneIcon sx={{ mr: 0.5, fontSize: '1rem' }} />
                  +31 640 392 596 {/* Updated Phone Number */}
                </Typography>
                <IconButton color="inherit" size="small">
                  {' '}
                  {/* Smaller icon button */}
                  <SearchIcon sx={{ fontSize: '1.2rem' }} />{' '}
                  {/* Slightly larger icon */}
                </IconButton>
              </Box>
            </Toolbar>
          )}
          {/* Main Navigation Bar */}
          <Toolbar
            disableGutters
            sx={{ minHeight: '64px' /* Standard height */, px: 2 }}
          >
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography // Logo for Mobile
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 'bold', flexGrow: 1, cursor: 'pointer' }}
                >
                  LOGO
                </Typography>
                {/* Search icon moved to drawer for mobile consistency */}
              </>
            ) : (
              <>
                <Typography // Logo for Desktop
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    mr: 4 /* Add margin */,
                  }} // Removed flexGrow
                >
                  LOGO
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'center',
                  }}
                >
                  {navItems.map((item) => (
                    <Button // Using Button with sx instead of NavLink
                      key={item}
                      sx={(theme: Theme) => ({
                        // Added Theme type
                        color: theme.palette.text.primary,
                        margin: theme.spacing(0, 1),
                        '&:hover': {
                          color: theme.palette.primary.main,
                        },
                      })}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
                <Box // Using Box with sx instead of TopBarInfo
                  sx={(theme: Theme) => ({
                    // Added Theme type
                    display: 'flex',
                    alignItems: 'center',
                    gap: theme.spacing(2),
                    // Top Bar elements moved above
                  })}
                >
                  {/* Top Bar elements are now in the separate Toolbar */}
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <HeroSection />
        <AboutUsSection />
        <WhatWeDoSection />
        <ContactCtaSection />
        <HowWeDoItSection />
        {/* Placeholder for Contact Form section */}
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography variant="h4" gutterBottom>
            Placeholder for Contact Form Section
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
