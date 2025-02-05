// components/FeatureSection.tsx
import React from 'react';
import Image from 'next/image';
export default function FeatureSection (){
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-wrap md:flex-nowrap gap-6">
        <div className="w-full md:w-1/2">
          <Image
            src="/project pics/feature Sec left .png"
            alt="Left Image"
            className="w-full h-full object-cover rounded-lg"
            width={200}
            height={200}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <Image
            src="/project pics/feature sec right top .png"
            alt="Top Right Image"
            className="w-full h-1/2 object-cover rounded-lg mb-6"
            width={200}
            height={200}
          />
          <div className="flex gap-6">
            <Image
              src="/project pics/feature sec right bottom .png"
              alt="Bottom Left Image"
              className="w-1/2 h-64 object-cover rounded-lg"
              width={200}
            height={200}
            />
            <Image
              src="/project pics/feature sec right bottom 2.png"
              alt="Bottom Right Image"
              className="w-1/2 h-64 object-cover rounded-lg"
              width={200}
            height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


