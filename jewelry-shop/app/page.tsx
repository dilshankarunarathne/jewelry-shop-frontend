import { Navbar } from '../components/Navbar' 
import HomeContent from '../components/HomeContent.client'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <div className="App">
        <Navbar />
        <HomeContent />
        <Footer />
      </div>
    </main>
  )
}
