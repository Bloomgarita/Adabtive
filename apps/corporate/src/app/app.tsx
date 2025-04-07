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
  // Removed useTheme import
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  // Removed Theme import
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import ContactCtaSection from './components/ContactCtaSection';
import HowWeDoItSection from './components/HowWeDoItSection';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

// Define theme based on Figma styles
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFF861', // Figma Yellow
    },
    secondary: {
      main: '#F0F98F', // Figma Tag Yellow
    },
    background: {
      default: '#0D0D0D', // Figma Dark Background
      paper: '#212121', // Figma Navbar Background
    },
    text: {
      primary: '#FFFFFF', // Figma White
      secondary: '#AFFKP0', // Figma Dark Grey Text (#2F2F2F on light bg, using AFFKP0 from Figma data for dark bg)
      disabled: 'rgba(255, 255, 255, 0.7)', // Figma Search Placeholder
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    grey: {
      '100': '#F9F9F9', // Figma Light Background
      '800': '#2F2F2F', // Figma Dark Grey Text
      '900': '#1D1D1D', // Figma Darker Background Layer
    },
  },
  typography: {
    fontFamily: '"Nunito", sans-serif',
    h1: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: '54px',
      fontWeight: 600,
      lineHeight: 1.11,
    },
    h2: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.26,
    },
    h3: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: 1.26,
    },
    h4: {
      fontFamily: '"Lato", sans-serif',
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: 1.2,
      textTransform: 'capitalize',
    },
    h5: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: 1.26,
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.12,
      textTransform: 'capitalize',
    }, // Logo style
    body1: {
      fontFamily: '"Nunito", sans-serif',
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: 1.36,
    },
    body2: {
      fontFamily: '"Nunito", sans-serif',
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: 1.36,
    },
    button: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 600,
      fontSize: '13px',
      lineHeight: 1.17,
      textTransform: 'none',
    },
    subtitle1: {
      // For Nav items and Top bar text
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: 1.36,
      textTransform: 'capitalize',
    },
    caption: {
      // For tags like "About Us"
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 600,
      fontSize: '10px',
      lineHeight: 1.36,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme: ownerTheme }) => ({
          // Renamed theme to ownerTheme to avoid conflict
          borderRadius: '8px 8px 0px 8px', // Default from "Learn More"
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              color: ownerTheme.palette.common.black, // Black text on primary button
              borderRadius: '10px 10px 0px 10px', // Specific for "Contact Us" primary
            }),
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#212121', // Figma Navbar Background
          boxShadow: 'none',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        dense: {
          minHeight: '40px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
        regular: {
          minHeight: '72px',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg', // Set default maxWidth based on Figma usage
      },
      styleOverrides: {
        root: {
          '@media (min-width:1200px)': {
            // Match lg breakpoint
            // maxWidth: '1180px', // Example if specific width needed instead of lg
            paddingLeft: '0px', // Remove padding based on disableGutters usage
            paddingRight: '0px', // Remove padding based on disableGutters usage
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.57)',
            borderRadius: '8px',
            paddingRight: '12px',
            '& fieldset': { border: 'none' },
            '&:hover fieldset': { border: 'none' },
            '&.Mui-focused fieldset': { border: 'none' },
          },
          '& .MuiInputBase-input': {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '15px',
            fontFamily: '"Nunito", sans-serif',
            padding: '10px 0px 10px 12px',
            height: 'auto',
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
  },
});

const navItems = ['Home', 'About Us', 'Our Services', 'Our Team', 'Contacts'];

export function App() {
  // Use theme defined outside for useMediaQuery
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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

  // Drawer content definition
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', bgcolor: 'background.paper', height: '100%' }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Logo {/* Use text Logo */}
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} sx={{ typography: 'subtitle1' }} />{' '}
              {/* Apply style */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* Removed unused icons from mobile drawer example */}
      {/* <Box sx={{ p: 2, borderTop: '1px solid grey' }}> ... </Box> */}
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      {' '}
      {/* Apply the theme */}
      <CssBaseline />
      <AppBar component="nav" position="sticky">
        <Container>
          {' '}
          {/* Use default maxWidth from theme overrides */}
          {/* Top Bar for Desktop */}
          {!isMobile && (
            <Toolbar
              variant="dense"
              disableGutters
              sx={{ justifyContent: 'flex-end' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                <Button
                  color="inherit"
                  size="small"
                  startIcon={<LanguageIcon sx={{ fontSize: '16px' }} />}
                  onClick={handleLangMenuOpen}
                  sx={{
                    typography: 'subtitle1',
                    textTransform: 'uppercase',
                    minWidth: 'auto',
                    p: 0,
                    gap: '4px',
                    '& .MuiButton-startIcon': { margin: 0 },
                  }}
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
                  variant="subtitle1"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    textTransform: 'lowercase',
                  }}
                >
                  <MailOutlineIcon sx={{ fontSize: '16px' }} />
                  iam@adabtive.nl
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <PhoneIcon sx={{ fontSize: '16px' }} />
                  +31 640 392 596
                </Typography>
              </Box>
            </Toolbar>
          )}
          {/* Main Navigation Bar */}
          <Toolbar disableGutters sx={{ alignItems: 'center' }}>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    cursor: 'pointer',
                    display: { md: 'none' },
                  }}
                >
                  Logo
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ cursor: 'pointer', mr: '40px' }}
                >
                  Logo
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'center',
                    gap: '40px',
                  }}
                >
                  {navItems.map((item) => (
                    <Button
                      key={item}
                      color="inherit"
                      sx={{
                        typography: 'subtitle1',
                        p: 0,
                        minWidth: 'auto',
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Search"
                  sx={{ width: '256px' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
              bgcolor: 'background.paper',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* Main Content Area */}
      <Box component="main" sx={{ bgcolor: 'background.default' }}>
        {' '}
        {/* Ensure main content uses default background */}
        <HeroSection />
        <AboutUsSection />
        <WhatWeDoSection />
        <ContactCtaSection />
        <HowWeDoItSection />
        {/* Placeholder for Contact Form section */}
        <Container sx={{ py: 4 }}>
          {' '}
          {/* Use default maxWidth */}
          <Typography variant="h4" gutterBottom>
            Placeholder for Contact Form Section
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
