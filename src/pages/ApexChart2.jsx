"use client"; // Next.js App Router ke liye zaroori hai

import dynamic from 'next/dynamic';
import React from 'react';

// ReactApexChart ko dynamically import karein to fix SSR issue
const ApexChartComponent = dynamic(() => import('../Component/Apex'), { ssr: false });

const ApexChart2 = () => {
  return (
    <div className="border w-full p-6"> {/* ✅ Full width container */}
      <div className="flex justify-between">
        <h3 className='font-semibold text-2xl'>Action Lorem Ipusm</h3>
        <div>
          <select className="border p-2 rounded">
            <option>Last Year 2024</option>
            <option>Last Year 2023</option>
            <option>Last Year 2022</option>
            <option>Last Year 2021</option>
          </select>
        </div>
      </div>

      <div className='border-t-2 my-4 mx-2'></div>

     
        <ApexChartComponent
          title="Blogs and Articles"
          subtitle="68"
          seriesData={[
            { name: 'Blogs', data: [10, 8, 4, 3, 2, 4, 20, 10, 9, 12, 14, 28] },
            { name: 'Articles', data: [18, 12, 7, 8, 3, 18, 12, 10, 14, 12, 19, 12] }
          ]}
          categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          yAxisMin={0}
          yAxisMax={30}
          showHeading={false}
          
        />
      </div>
    
  );
};

export default ApexChart2;
