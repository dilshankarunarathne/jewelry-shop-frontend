"use client"

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
                <button onClick={() => setSelectedTab('all')}>All</button>
                <button onClick={() => setSelectedTab('best seller')}>Best Seller</button>
                <button onClick={() => setSelectedTab('new')}>New</button>

                {
                  selectedTab === 'all' && 
                  <div>All jewelry content</div>
                }
                {
                  selectedTab === 'best seller' && 
                  <div>Best seller jewelry content</div>
                }
                {
                  selectedTab === 'new' && 
                  <div>New jewelry content</div>
                }
            </div>
        </div>
      </div>
    </main>
  )
}
