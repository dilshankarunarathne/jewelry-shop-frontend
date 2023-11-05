"use client"

import { useState } from 'react';

import { Navbar } from '../../components/Navbar' 
import CollectionTile from '@/components/CollectionTile';

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
                <button onClick={() => setSelectedTab('all')}>All</button>
                <button onClick={() => setSelectedTab('best seller')}>Best Seller</button>
                <button onClick={() => setSelectedTab('new')}>New</button>

                {
                  selectedTab === 'all' && 
                  <div>
                    
                  </div>
                }
                {
                  selectedTab === 'best seller' && 
                  <div>
                    
                  </div>
                }
                {
                  selectedTab === 'new' && 
                  <div>
                    
                  </div>
                }
            </div>
        </div>
      </div>
    </main>
  )
}
