"use client"

import { useState } from 'react';
import { Button, Link, Menu, MenuItem, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Image from "next/image";

import './NavbarPawn.css'

export function NavbarPawn() {
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
        <Image src="/logo-pawn.png" alt="Shop Logo" className="logo" width={60} height={60} />
      </RouterLink>
      <div className="navbar-items">
        <RouterLink to="/"><Typography variant="h6">HOME</Typography></RouterLink>
        <RouterLink to="/products">
          <Typography variant="h6">
            <Button className='productsbtn' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <Typography variant="h6">PRODUCTS</Typography>
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
          <MenuItem className='menuitem' onClick={handleClose}><RouterLink to="/products/product1">Product 1</RouterLink></MenuItem>
          <MenuItem className='menuitem' onClick={handleClose}><RouterLink to="/products/product2">Product 2</RouterLink></MenuItem>
          <MenuItem className='menuitem' onClick={handleClose}><RouterLink to="/products">All Products</RouterLink></MenuItem>
        </Menu>
        <RouterLink to="/about"><Typography variant="h6">ABOUT US</Typography></RouterLink>
        <RouterLink to="/contact"><Typography variant="h6">CONTACT US</Typography></RouterLink>
      </div>
    </nav>
  );
}
