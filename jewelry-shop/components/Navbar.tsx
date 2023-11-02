import Link from 'next/link';
import './Navbar.css'
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const handleAboutPageClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push('/AboutPage');
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
        <Link href="/AboutPage" onClick={handleAboutPageClick}>ABOUT US</Link>
        <Link href="/contact">CONTACT US</Link>
      </div>
    </nav>
  );
}
