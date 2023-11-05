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
            <p className="intro-text">try our best collection of rings and necklace</p>

            <div className='categories'>
                <button className='categoryTab' onClick={() => setSelectedTab('all')}>All</button>
                <button className='categoryTab' onClick={() => setSelectedTab('best seller')}>Best Seller</button>
                <button className='categoryTab' onClick={() => setSelectedTab('new')}>New</button>

                {
                  selectedTab === 'all' && 
                  <div className='product-tiles'>
                    <CollectionTile name="Product 1" image="image1.jpg" onButtonClick={() => {}} />
                    <CollectionTile name="Product 2" image="image2.jpg" onButtonClick={() => {}} />
                    <CollectionTile name="Product 3" image="image3.jpg" onButtonClick={() => {}} />
                    <CollectionTile name="Product 4" image="image4.jpg" onButtonClick={() => {}} />
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
  )
}
