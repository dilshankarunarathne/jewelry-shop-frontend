import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      // Add more links as needed
    </nav>
  )
}
