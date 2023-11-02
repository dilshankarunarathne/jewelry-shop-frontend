import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">HOME</Link>
      <Link href="/about">PRODUCTS</Link>
      <Link href="/about">ABOUT US</Link>
      <Link href="/contact">CONTACT US</Link>
    </nav>
  );
}
