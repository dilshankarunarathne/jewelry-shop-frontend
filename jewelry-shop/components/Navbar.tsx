"use client"

import Link from 'next/link';
import './Navbar.css'
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../app/AboutPage'

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
  return (
    <nav>
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
            <Navigation href="/products/product3">Product 3</Navigation>
          </div>
        </div>
        <Link href="/AboutPage">ABOUT US</Link>
        <Routes>
        <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Link href="/contact">CONTACT US</Link>
      </div>
    </nav>
  );
}
