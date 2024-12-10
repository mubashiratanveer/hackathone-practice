
'use client'

// components/ProductList.tsx
import React from 'react';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';

const products = [
  { id: 1, name: 'HAVIT HV-G92 Gamepad',  price: '$120', rating: 3, imgSrc: 'project pics/product 1.png' },
  { id: 2, name: 'Ak-900 Wired Key board',  price: '$960', rating: 3, imgSrc: 'project pics/product 2.png' },
  { id: 3, name: 'IPS LCD Gaming Monitor',  price: '$370', rating: 3, imgSrc: 'project pics/product 3.png' },
  { id: 4, name: 'S-Series Comfort Chair',  price: '$375', rating: 3, imgSrc: 'project pics/product 4.png' },
]

export default function ProductList(){
    function handleAddToCart(id: number): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div className="container mx-auto px-6 py-8">
     
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg relative group">
            <div className="relative">
              <button
                onClick={() => handleAddToCart(product.id)}
                className="w-full"
              >
                <img src={product.imgSrc} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <AiOutlineShoppingCart className="mr-2" /> Add to Cart
                </div>
              </button>
            </div>
            <h3 className="text-sm font-semibold ">{product.name}</h3>
            <p className="text-sm text-red-500 mb-4">{product.price}</p>
            <div className="flex items-center mb-4">
              
            {Array.from({ length: 5 }, (_, i) => ( <AiFillStar key={i} className={i < 3 ? 'text-yellow-500' : 'text-gray-300'} /> ))}
            </div>

          </div>
        ))}
      </div>

      <div className='text-center mt-5 mb-5'>
        <button className=' bg-red-500  p-3  hover:bg-red-600 rounded-md  text-white text-sm'>
          View All Products
        </button>
      </div>
      
    <hr className="border-t-2 border-gray-300 my-6"/>

        


    </div>
  );
};


