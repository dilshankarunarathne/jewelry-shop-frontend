"use client"

import { useState } from 'react';
import { Button, Link, Menu, MenuItem, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Image from "next/image";

import './Navbar.css'

export function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
      <RouterLink to="/">
        <Image src="/path/to/logo.png" alt="Shop Logo" className="logo" width={500} height={300} />
      </RouterLink>
      <div className="navbar-items">
        <RouterLink to="/"><Typography variant="h6">HOME</Typography></RouterLink>
        <RouterLink to="/products">
          <Typography variant="h6">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              PRODUCTS
            </Button>
          </Typography>
        </RouterLink>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><RouterLink to="/products/product1">Product 1</RouterLink></MenuItem>
          <MenuItem onClick={handleClose}><RouterLink to="/products/product2">Product 2</RouterLink></MenuItem>
          <MenuItem onClick={handleClose}><RouterLink to="/products">All Products</RouterLink></MenuItem>
        </Menu>
        <RouterLink to="/about"><Typography variant="h6">ABOUT US</Typography></RouterLink>
        <RouterLink to="/contact"><Typography variant="h6">CONTACT US</Typography></RouterLink>
      </div>
    </nav>
  );
}
