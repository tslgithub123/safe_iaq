import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../images/logo.png';
import '../css/Navbar.css';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* AppBar for Navbar */}
      <AppBar position="static" color="default" className="navbar">
        <Toolbar className="toolbar">
          {/* Logo on the left */}
          <IconButton edge="start" color="inherit" aria-label="logo">
            <img src={logo} alt="Logo" className="logo-img" />
          </IconButton>

          {/* Centered Heading */}
          <Typography variant="h6" component="div" className="navbar-heading">
            SAFE IAQ
          </Typography>

          {/* Hidden on mobile, shown on larger screens */}
          <Hidden smDown>
            <div className="navbar-links">
              <a href="#questionnaire" className="nav-link">Questionnaire</a>
              <a href="#iaqdata" className="nav-link">IAQ Data</a>
            </div>
          </Hidden>

          {/* Hamburger Menu for mobile/tablets */}
          <Hidden smUp>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile/tablet navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="drawer-header">
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          <ListItem button onClick={toggleDrawer(false)} component="a" href="#questionnaire">
            <ListItemText primary="Questionnaire" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)} component="a" href="#iaqdata">
            <ListItemText primary="IAQ Data" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
