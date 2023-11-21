"use client"

import { useState } from 'react';
import { Button,  Menu, MenuItem, Typography, Drawer, List, ListItem, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Image from "next/image";
import MenuIcon from '@material-ui/icons/Menu';

import Link from 'next/link';

import './Navbar.css'

export function Navbar() {
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
      <IconButton edge="start" color="inherit" className='drawerbtn' aria-label="menu" onClick={handleDrawerOpen}>
        <MenuIcon />
      </IconButton>
      
      <Drawer 
        anchor="left" 
        open={drawerOpen} 
        onClose={handleDrawerClose}
        PaperProps={{
          style: {
            backgroundColor: '#FFB714',
          },
        }}
      >
        <List>
          <ListItem button component="a" href="#home">HOME</ListItem>
          <ListItem button component="a" href="#products">PRODUCTS</ListItem>
          <ListItem button component="a" href="#about">ABOUT US</ListItem>
          <ListItem button component="a" href="#contact">CONTACT US</ListItem>
        </List>
      </Drawer>

      <Link href="#home" passHref>
        <Image src="/logo.png" alt="Shop Logo" className="logo" width={100} height={100} />
      </Link>

      <div className="navbar-items">
       
        <Link href="/" passHref>
          <Typography variant="h6">HOME</Typography>
        </Link>

        <Link href="#products" passHref>
          <Typography variant="h6">
            <Button className='productsbtn' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <Typography variant="h6">PRODUCTS</Typography>
            </Button>
          </Typography>
        </Link>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className='menuitem' onClick={handleClose}>
            <Link href="/products/product1" passHref>Product 1</Link>
          </MenuItem>
          <MenuItem className='menuitem' onClick={handleClose}>
            <Link href="/products/product2" passHref>Product 2</Link>
          </MenuItem>
          <MenuItem className='menuitem' onClick={handleClose}>
            <Link href="/products/product3" passHref>Product 3</Link>
          </MenuItem>
        </Menu>
        
        <Link href="#about" passHref>
          <Typography variant="h6">
            ABOUT US
          </Typography>
        </Link>

        <Link href="#contact" passHref>
          <Typography variant="h6">
            CONTACT US
          </Typography>
        </Link>
      </div>
    </nav>
  );
}
