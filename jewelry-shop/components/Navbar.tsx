import { Navigation } from 'next/navigation'

export default function Navbar() {
  return (
    <nav>
      <Navigation href="/">Home</Navigation>
      <Navigation href="/about">About</Navigation>
      // Add more Navigation as needed
    </nav>
  )
}
