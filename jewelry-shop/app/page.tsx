import { Navbar } from '../components/Navbar' 
import HomeContent from '../components/HomeContent.client'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeContent />
      <Footer />
    </main>
  )
}
