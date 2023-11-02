import Image from 'next/image'
import Navbar from '../components/Navbar' // Adjust the path as needed

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
    </main>
  )
}
