import { useState } from 'react';

import { Navbar } from '../../components/Navbar' 

import './products.css'

export default function ProductsPage() {
  const [selectedTab, setSelectedTab] = useState('all');

  
  return (
    <main>
      <div className="ProductsPage">
        <Navbar />
        <div className='topic'>
            <h1>Latest Collection</h1>
            <p>try our best collection of rings and necklace</p>

            <div className='categories'>

            </div>
        </div>
      </div>
    </main>
  )
}
