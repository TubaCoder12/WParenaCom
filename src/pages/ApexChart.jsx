"use client"; // Next.js App Router ke liye zaroori hai

import Image from 'next/image';
import dynamic from 'next/dynamic';
import React from 'react';

// ReactApexChart ko dynamically import karein to fix SSR issue
const ApexChartComponent = dynamic(() => import('../Component/Apex'), { ssr: false });

const ApexChart = () => {
  return (
    <div className="my-8 flex flex-col lg:flex-row gap-4">
      {/* Left Side - Text Content */}
      <div className="w-full max-w-screen-xl lg:w-[1300px] mx-auto px-4">

        <h2 className="font-semibold lg:text-5xl">How Many Websites Are There?</h2>
        <p className="my-4">
          Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s. simply dummy text of the printing and industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s.
        </p>

        <p>
          It is a long established fact that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using readable English. simply dummy text of the printing and industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s.
        </p>

        {/* Bullet Points */}
        <div className="mt-6 space-y-2">
          {[
            "It is a long established fact that a reader will be distracted by readable content.",
            "Lorem Ipsum is simply dummy text of the printing industry.",
            "It is a long established fact that a reader will be distracted.",
            "Lorem Ipsum has been the industry's standard dummy text.",
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-3">
              <Image src="/arrow.png" width={32} height={16} alt="Arrow icon" className="flex-shrink-0" />
              <p className="text-lg md:text-base font-bold">{text}</p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <button
          type="button"
          className="my-4 bg-gray-800 text-white px-6 py-3 rounded hover:bg-[#2980b9] transition duration-300 text-lg font-medium"
        >
          LEARN MORE
        </button>
      </div>

      {/* Right Side - ApexChart */}
      <div className="lg:w-1/2">
        <ApexChartComponent
          title="Blogs"
          subtitle=""
          seriesData={[{ name: "Blogs", data: [0, 300, 330, 230, 350, 350, 250, 250] }]}
          categories={["10", "15", "20", "25", "30", "35", "40", "45"]}
          yAxisMin={0}
          yAxisMax={400}
        />
      </div>
      
    </div>
    
  );
};

export default ApexChart;
