"use client" 

import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from '../components/Navbar' 
import HomeContent from '../components/HomeContent.client'
import Footer from '../components/Footer'
import './page.css'

export default function Home() {
  return (
    <Router>
      <main>
        <div className="App">
          <Navbar />
          <HomeContent />
          {/* <Footer /> */}
        </div>
      </main>
    </Router>
  )
}
