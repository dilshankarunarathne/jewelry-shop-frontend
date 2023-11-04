import { Navbar } from '../../components/Navbar' 

export default function AboutPage() {
  return (
    <main style={{
      background: 'linear-gradient(to right, transparent, #FFFDCE) !important',
      minHeight: '100vh'
    }}>
      <div className="AboutPage">
        <Navbar />
        <h1>About</h1>
      </div>
    </main>
  )
}
