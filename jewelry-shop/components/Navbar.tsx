import Link from 'next/link';

interface NavigationProps {
  href: string;
  children: React.ReactNode;
}

function Navigation({ href, children }: NavigationProps) {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
}

export function Navbar() {
  return (
    <nav>
      <Link href="/"><a>Home</a></Link>
      <div className="dropdown">
        <button className="dropbtn">Products</button>
        <div className="dropdown-content">
          <Link href="/products/product1"><a>Product 1</a></Link>
          <Link href="/products/product2"><a>Product 2</a></Link>
          <Link href="/products/product3"><a>Product 3</a></Link>
        </div>
      </div>
      <Link href="/about"><a>About</a></Link>
      // Add more links as needed
    </nav>
  );
}
