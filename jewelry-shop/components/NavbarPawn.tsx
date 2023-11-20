"use client"

import { useState } from 'react';
import { Button, Link, Menu, MenuItem, Typography, Drawer, List, ListItem, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Image from "next/image";
import MenuIcon from '@material-ui/icons/Menu';

import './NavbarPawn.css'

export function NavbarPawn() {
  const [isActive, setIsActive] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div className="navbar-header">
      <IconButton className='drawbtn' edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
        <MenuIcon />
      </IconButton>
      
      <Drawer 
        anchor="left" 
        open={drawerOpen} 
        onClose={handleDrawerClose}
        // PaperProps={{
        //   style: {
        //     backgroundColor: 'transparent',
        //   },
        // }}
      >
        <List>
          <ListItem className='list-item' button component="a" href="#home">HOME</ListItem>
          <ListItem className='list-item' button component="a" href="#services">SERVICES</ListItem>
          <ListItem className='list-item' button component="a" href="#about">ABOUT US</ListItem>
        </List>
      </Drawer>
      
      <a href="#home">
        <Image src="/logo-pawn.png" alt="Shop Logo" className="logo" width={60} height={60} />
      </a>
      </div>
      <div className="navbar-items">
        <a href="#home"><Typography variant="h6">HOME</Typography></a>
        <a href="#services"><Typography variant="h6">SERVICES</Typography></a>
        <a href="#about"><Typography variant="h6">ABOUT US</Typography></a>
      </div>
    </nav>
  );
}
