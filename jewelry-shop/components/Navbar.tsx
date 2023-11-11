"use client"

import { useState } from 'react';
import Link from 'next/link';

import './Navbar.css'

interface NavigationProps {
  href: string;
  children: React.ReactNode;
}

function Navigation({ href, children }: NavigationProps) {
  return (
    <Link href={href}>{children}</Link>
  );
}

export function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={isActive ? 'active' : ''}>
      <button onClick={toggleActive} className="menu-button">Menu</button>
      <Link href="/">
        <img src="/path/to/logo.png" alt="Shop Logo" className="logo" />
      </Link>
      <div>
        <Link href="/">HOME</Link>
        <div className="dropdown">
          <button className="dropbtn">PRODUCTS</button>
          <div className="dropdown-content">
            <Navigation href="/products/product1">Product 1</Navigation>
            <Navigation href="/products/product2">Product 2</Navigation>
            <Link href="/products">All Products</Link>
          </div>
        </div>
        <Link href="/about">ABOUT US</Link>
        <Link href="/contact">CONTACT US</Link>
      </div>
    </nav>
  );
}
