import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <button onClick={() => router.push('/')}>Home</button>
      <button onClick={() => router.push('/about')}>About</button>
      // Add more buttons as needed
    </nav>
  )
}
