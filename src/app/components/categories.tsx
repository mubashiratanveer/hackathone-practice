


'use client'


// components/Categories.tsx
import React from 'react';
import { FaMobileAlt, FaLaptop,  FaCamera, FaHeadphones, FaGamepad } from 'react-icons/fa';
import { IoWatchOutline } from "react-icons/io5";

const categories = [
  { name: 'Phone', icon: FaMobileAlt },
  { name: 'laptop',icon:FaLaptop  },
  { name: 'Watch',icon:  IoWatchOutline  },
  { name: 'Camera', icon: FaCamera },
  { name: 'Head Phone', icon: FaHeadphones },
  { name: 'Gaming', icon: FaGamepad },
];

export default function Categories(){
  return (

         


    <div className="container mx-auto px-6 py2">
            <div className="relative inline-block">
               <span className="abolute inset-0 border-l-8  border-red-500 rounded-sm"></span>
                <span className="relative z-10 bg-white px-2 text-sm text-red-500 mb-5">Categories</span> 
                </div>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category) => (
          <div key={category.name} className="w-40 h-40 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center hover:bg-red-500 transition duration-300">
            <category.icon className="text-black text-4xl hover:text-white  transition duration-300" />
            <p className="mt-4 text-black hover:text-white transition duration-300">{category.name}</p>
          </div>
        ))}
      </div>
      <hr className="border-t-2 border-gray-300 my-6"/>
    </div>
  );
};


