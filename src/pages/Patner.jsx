import React from "react";
import Image from "next/image";
import Link from "next/link";
const Patners = () => {
  const PatnersData = [
    {
      id: 1,
      PatnerIcon: '/wpa-patner-capital.png',
    },

    {
      id: 2,
      PatnerIcon: '/status-group.png',
    },

    {
      id: 3,
      PatnerIcon: '/patner-finance.png',
    },

    {
      id: 4,
      PatnerIcon: '/patner-analysist-center.png',
    },

    {
      id: 5,
      PatnerIcon: '/patner-accession.png',
    },

    {
      id: 6,
      PatnerIcon: '/patner-dynamic.png',
    },

    {
      id: 7,
      PatnerIcon: '/wpa-patner-capital.png',
    },

    {
      id: 8,
      PatnerIcon: '/status-group.png',
    },
  ];
  return (
    <>
<section>
  <div className="relative overflow-hidden whitespace-nowrap mb-8 mt-8">
    <div className="flex gap-10 px-20 py-4 items-center justify-center animate-marquee">
      {PatnersData.map((elem, index) => (
        <Link href="/" className="inline-block w-40" key={elem.id || index}>
          <div className="w-40">
          <Image className="max-w-full h-auto" src={elem.PatnerIcon} alt="Patners" width={160} height={160}/>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>


    </>
  );
};

export default Patners;
