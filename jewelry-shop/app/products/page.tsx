import { Navbar } from '../../components/Navbar' 

import './page.css'

export default function ProductsPage() {
  return (
    <main>
      <div className="ProductsPage">
        <Navbar />
        <div className='topic'>
            <h1>Latest Collection</h1>
            <p>try our best collection of rings and necklace</p>
        </div>
      </div>
    </main>
  )
}
