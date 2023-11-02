import Link from 'next/link';
import 'next/navigation'; 

import './Navbar.css'
import '../app/AboutPage'

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
  const handleAboutPageClick = (event: React.MouseEvent) => {
    event.preventDefault();
  };

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
        {/* <Link href="/AboutPage">ABOUT US</Link> */}
        <Link href="/AboutPage" onClick={handleAboutPageClick}>ABOUT US</Link>
        <Link href="/contact">CONTACT US</Link>
      </div>
    </nav>
  );
}
