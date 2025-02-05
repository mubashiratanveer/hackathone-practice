

// components/Banner.tsx
import React from 'react';
import Image from 'next/image';
export default function Banner(){
  return (
    <div className="flex flex-col md:flex-row bg-black p-12 rounded-lg shadow-lg ml-7 mr-7 mb-7 ">
 
      <div className="md:w-1/2 flex flex-col justify-center items-start mb-6 md:mb-0 ">
        <h2 className="text-xl font-semibold mb-7 text-green-500 ">Categories</h2>
        <h3 className="text-4xl mb-2 text-white">Enhance Your </h3>
        <h3 className="text-4xl mb-6 text-white">Music Experience</h3>
        <div className=" gap-6 flex mb-6  ">
          <div className="flex flex-col items-center rounded-full w-16 h-16 bg-white ">
            <span className=' text-sm mt-2'>23</span>
            <span className='text-sm'>Hours</span>
          </div>
          <div className="flex flex-col items-center rounded-full w-16 h-16 bg-white">
            <span className=' text-sm mt-2'>05</span>
            <span className=' text-sm '>Days</span>
          </div>
          <div className="flex flex-col items-center rounded-full w-16 h-16 bg-white">
            <span className=' text-sm mt-2'>59</span>
            <span className=' text-sm '>Minutes</span>
          </div>
          <div className="flex flex-col items-center rounded-full w-16 h-16 bg-white">
            <span className=' text-sm mt-2'>35</span>
            <span className=' text-sm '>Seconds</span>
          </div>
        </div>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">Buy Now</button>
      </div>
      <div className="md:w-1/2">
        <Image 
        src="/project pics/Banner.png" 
        alt="Banner " 
        className="w-full h-full object-cover rounded-lg"
        width={200}
        height={200}/>
      </div>
    </div>
  );
};

;
