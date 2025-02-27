"use client"; // Next.js App Router ke liye zaroori hai

import dynamic from "next/dynamic";
import React from "react";
import { ApexOptions } from "apexcharts";

// 🛠 ReactApexChart ko dynamically import karein (SSR disable)
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Apex = ({ title, subtitle, seriesData, categories, yAxisMin, yAxisMax }) => {
  // 🎨 Dynamically generate colors based on the number of series
  const colors =
    seriesData.length === 1
      ? ["#cee8f5", "#2980b9"]
      : ["#cee8f5", "#2980b9", "#a8d0e6", "#3c8dbc"];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: { show: false }, // ❌ Hide the toolbar menu
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: seriesData.length === 1, // 🎯 Use different colors for multiple series
        borderRadius: 5,
      },
    },
    dataLabels: { enabled: false },
    legend: { show: seriesData.length > 1 }, // ✅ Show legend only if multiple series
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: colors.slice(0, categories.length),
          fontSize: "16px",
        },
      },
    },
    yaxis: {
      tickAmount: 4, // ✅ Y-axis labels limited to 4
      min: yAxisMin,
      max: yAxisMax,
      labels: {
        formatter: (value) => value.toFixed(0), // 🎯 Ensure integer values
      },
    },
  };

  return (
    <>
    
    <div className="w-full max-w-[1600px] mx-auto p-4 bg-white  rounded-lg">
  
      {/* 🏷 Chart Title */}
      <div className="flex justify-between items-center mb-4  bg-[#ebf1ff]">
      <h3 className="text-2xl font-semibold bg-[#ebf1ff] p-4 rounded-md ">{title}</h3>
        <h3 className="text-gray-600 p-6 font-semibold text-2xl">{subtitle}</h3>
      </div>

      {/* 📊 Chart Render */}
      <ReactApexChart options={options} series={seriesData} type="bar" height={350} />
    </div>
    </>
  );
};

export default Apex;
