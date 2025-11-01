import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 240;
const navItems = [
  ['Home', 'main'], 
  ['Expertise', 'expertise'], 
  ['History', 'history'], 
  ['Projects', 'projects'], 
  ['Contact', 'contact']
];

function Navigation({parentToChild, modeChange}: any) {

  const {mode} = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('main');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > 50;
        setScrolled(scrolled);
      }

      // Determine active section based on scroll position
      const sections = ['main', 'expertise', 'history', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    if (section === 'main') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('main');
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offset = 64; // Account for fixed navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setActiveSection(section);
      }
    }
    // Close mobile menu after navigation
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', gap: '8px' }}>
        <ListIcon />
        <p className="mobile-menu-top" style={{ margin: 0 }}>Menu</p>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton 
              sx={{ 
                textAlign: 'center',
                backgroundColor: activeSection === item[1] ? 'rgba(80, 0, 202, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(80, 0, 202, 0.15)',
                }
              }} 
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText 
                primary={item[0]} 
                primaryTypographyProps={{
                  style: {
                    fontWeight: activeSection === item[1] ? 'bold' : 'normal',
                    color: activeSection === item[1] ? '#5000ca' : '#0d1116'
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
        component="nav" 
        id="navigation" 
        className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}
        sx={{
          backgroundColor: mode === 'dark' 
            ? (scrolled ? 'rgba(13, 17, 22, 0.95)' : '#0d1116')
            : (scrolled ? 'rgba(248, 249, 250, 0.95)' : '#f8f9fa'),
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled 
            ? (mode === 'dark' ? '0 2px 20px rgba(0, 0, 0, 0.3)' : '0 2px 20px rgba(0, 0, 0, 0.1)')
            : 'none',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <Toolbar className='navigation-bar' sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Button
              onClick={() => scrollToSection('main')}
              sx={{
                color: mode === 'dark' ? '#fff' : '#0d1116',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#5000ca',
                  backgroundColor: 'transparent',
                  transform: 'scale(1.05)'
                }
              }}
              startIcon={<HomeIcon />}
            >
              Hassnain Ali
            </Button>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 0.5 }}>
              {navItems.map((item) => (
                <Button 
                  key={item[0]} 
                  onClick={() => scrollToSection(item[1])} 
                  sx={{ 
                    color: activeSection === item[1] ? '#5000ca' : (mode === 'dark' ? '#fff' : '#0d1116'),
                    fontWeight: activeSection === item[1] ? 'bold' : 'normal',
                    textTransform: 'none',
                    fontSize: '1rem',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#5000ca',
                      backgroundColor: 'rgba(80, 0, 202, 0.1)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  {item[0]}
                </Button>
              ))}
            </Box>
            <IconButton
              onClick={() => modeChange()}
              sx={{
                color: mode === 'dark' ? '#fff' : '#0d1116',
                marginLeft: 2,
                padding: '8px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: mode === 'dark' ? 'rgba(80, 0, 202, 0.2)' : 'rgba(80, 0, 202, 0.1)',
                  transform: 'rotate(180deg)'
                }
              }}
              aria-label="toggle theme"
            >
              {mode === 'dark' ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;