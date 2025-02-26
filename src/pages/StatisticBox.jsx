import React from 'react';
import Image from 'next/image';

const StatisticsBoxes = () => {
    const StatisticsData = [
        { icon: "/sta1.png", years: "20+", title: "Years of Experience" },
        { icon: "/sta2.png", years: "7K+", title: "Happy Customers" },
        { icon: "/sta3.png", years: "10K+", title: "WPArena Blogs" },
        { icon: "/sta4.png", years: "7K+", title: "Projects Completed" },
        { icon: "/sta5.png", years: "2K+", title: "Our Themes" }
    ];

    return (
        <section className="my-8 px-5 xs:px-10 md:px-20">
            <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-5 gap-8 w-full">
                {StatisticsData.map((item, index) => (
                    <div key={index} className="bg-[#EBF1FF] rounded-xl shadow-md">
                        <div className="flex flex-col items-center justify-center gap-3 p-8 text-center">
                         {/* Icon Box */}
                            <div className="bg-[#2980B9] w-[110px] h-[110px] rounded-full flex items-center justify-center">
                                <Image src={item.icon} width={60} height={60} alt={item.title} />
                            </div>

                            {/* Text Content */}
                            <div>
                                <h2 className="text-2xl xs:text-4xl xl:text-5xl font-bold text-gray-800">
                                    {item.years}
                                </h2>
                                <h4 className="text-base xl:text-2xl font-semibold text-gray-700">
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatisticsBoxes;
