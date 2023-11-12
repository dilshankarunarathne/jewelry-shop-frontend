"use client"

import React, { useState, useEffect } from 'react';

import { Navbar } from '../../components/Navbar' 
import CollectionTile from '@/components/CollectionTile';
import { BrowserRouter as Router } from 'react-router-dom';

import './products.css'

export default function ProductsPage() {
  const [selectedTab, setSelectedTab] = useState('all');

  return (
    <Router>
    <main>
      <div className="ProductsPage">
        <Navbar />
        <div className='topic'>
            <h1>Latest Collection</h1>
            <p className="intro-text">try our best collection of rings and necklace</p>

            <div className='categories'>
                <div className="category-buttons">
                <button 
                  className={`categoryTab ${selectedTab === 'all' ? 'selected-tab' : ''}`} 
                  onClick={() => setSelectedTab('all')}
                >
                  All
                </button>
                <button 
                  className={`categoryTab ${selectedTab === 'best seller' ? 'selected-tab' : ''}`} 
                  onClick={() => setSelectedTab('best seller')}
                >
                  Best Seller
                </button>
                <button 
                  className={`categoryTab ${selectedTab === 'new' ? 'selected-tab' : ''}`} 
                  onClick={() => setSelectedTab('new')}
                >
                  New
                </button>
                </div>
                {
                  selectedTab === 'all' && 
                  <div className='product-tiles'>
                    <CollectionTile name="New Women Ring" image="image1.png" onButtonClick={() => {}} />
                    <CollectionTile name="New Wedding Ring" image="image2.png" onButtonClick={() => {}} />
                    <CollectionTile name="New Men Ring" image="image3.png" onButtonClick={() => {}} />
                    <CollectionTile name="New Necklace" image="image4.png" onButtonClick={() => {}} />
                  </div>
                }
                {
                  selectedTab === 'best seller' && 
                  <div className='product-tiles'>
                    <CollectionTile name="Product 5" image="image5.jpg" onButtonClick={() => {}} />
                    <CollectionTile name="Product 6" image="image6.jpg" onButtonClick={() => {}} />
                    <CollectionTile name="Product 7" image="image7.jpg" onButtonClick={() => {}} />
                    <CollectionTile name="Product 8" image="image8.jpg" onButtonClick={() => {}} />
                  </div>
                }
                {
                  selectedTab === 'new' && 
                  <div className='product-tiles'>
                    <CollectionTile name="Product 9" image="image9.jpg" onButtonClick={() => {}} />
                    <CollectionTile name="Product 10" image="image10.jpg" onButtonClick={() => {}} />
                    <CollectionTile name="Product 11" image="image11.jpg" onButtonClick={() => {}} />
                    <CollectionTile name="Product 12" image="image12.jpg" onButtonClick={() => {}} />
                  </div>
                }
            </div>
        </div>
      </div>
    </main>
    </Router>
  )
}
