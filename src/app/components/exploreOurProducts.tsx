

'use client'
import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const products = [
  { id: 1, name: 'Bready dry dog food',price: '$100',imgSrc: 'project pics/explore product 1.png', rating: 3 },
  { id: 2, name: 'Canon EOS DSLR camera',price: '$360', imgSrc: 'project pics/explore product 2.png', rating: 3 }, 
  { id: 3, name: 'ESUS FHD Gaming Laptop',price: '$700',  imgSrc: 'project pics/explore product 3.png', rating: 3 },
  { id: 4, name: 'Curology Product Set',price: '$500',  imgSrc: 'project pics/explore product 4.jpeg', rating: 3 },
  { id: 5, name: 'Kids Electric Car',price: '$960',  imgSrc: 'project pics/explore product 5.png', rating: 3 },
  { id: 6, name: 'Jr.Zoom Soccer Cleats',price: '$1160',  imgSrc: 'project pics/explore product 6.png', rating: 3 },
  { id: 7, name: 'GP11 Shooter USB gamepad',price: '$660',  imgSrc: 'project pics/explore product 7.png', rating: 3 },
  { id: 8, name: 'Quailted Sstin Jacket',price: '$660',  imgSrc: 'project pics/explore product 8.png', rating: 3 },
];

export default function ExploreProductList(){
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="relative inline-block">
               <span className="abolute inset-0 border-l-8  border-red-500 rounded-sm"></span>
                <span className="relative z-10 bg-white px-2 text-sm text-red-500 mb-5">Our Products</span> 
                </div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Explore Our Products</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, showAll ? products.length : 4).map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={product.imgSrc} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-sm font-semibold ">{product.name}</h3>
            <p className="text-sm text-red-500 mb-2">{product.price}</p>
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <AiFillStar key={i} className={i < product.rating ? 'text-yellow-500' : 'text-gray-300'} />
              ))}
            </div>
            <button className="bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

;
