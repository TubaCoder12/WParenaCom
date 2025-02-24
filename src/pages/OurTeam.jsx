import Image from 'next/image';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 576 },
        items: 3,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 575, min: 480 },
        items: 2,
        slidesToSlide: 1,
        arrows: true,
    },
    sm_mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1,
        slidesToSlide: 1,
        arrows: false,
    },
};

const teamMembers = [
    { name: 'Shahid Anwer', designation: 'Chief Technology Officer', image: "/wpa-shahid-anwer.jpg" },
    { name: 'Muhammad Zeeshan Sarwar', designation: 'Chief Executive Officer', image: "/jhazib-zaman.jpg" },
    { name: 'Muhammad Omer Ali', designation: 'Chief Financial Officer', image: "/muhammad-omer-ali.png" },
    { name: 'Zahra Kashif', designation: 'HR Lead / Project Engineer', image: "/zahra-kashif.png" },
];

const OurTeam = () => {
    return (
        <div className="mt-6 lg:bg-contain bg-cover bg-no-repeat" style={{ backgroundImage: `url("/wpa-our-team-member.png")` }}>
            <div className='md:px-20 xs:px-10 px-5 md:py-10 py-5'>
                <h2 className='xl:text-5xl lg:text-4xl xs:text-3xl text-2xl font-semibold mb-4 text-white'>OUR TEAM</h2>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 items-center justify-center'>
                    <div className='rounded-md overflow-hidden border-white shadow-md'>
                        <div className=''>
                            <Image className="w-full" src="/wpa-team-zeeshan-sarwar.png" alt='Nouman S. Ghuman' height={40} width={40}/>
                        </div>
                        <div className='py-5 px-8 bg-white h-full'>
                            <span className='text-slate-600 2xl:text-base text-sm'>Managing Director</span>
                            <h4 className='2xl:text-2xl text-lg font-semibold text-[#2980b9]'>Nouman S. Ghuman</h4>
                        </div>
                    </div>
                    <div className='rounded-md overflow-hidden border-white shadow-md'>
                        <div className=''>
                            <Image className="w-full" src="/wpa-team-zeeshan-sarwar.png" alt='Muhammad Zeeshan Sarwar' height={40} width={40}/>
                        </div>
                        <div className='py-5 px-8 bg-white h-full'>
                            <span className='text-slate-600 2xl:text-base text-sm'>Director & Creative Editor</span>
                            <h4 className='2xl:text-2xl text-lg font-semibold text-[#2980b9]'>Muhammad Zeeshan Sarwar</h4>
                        </div>
                    </div>
                    <div className='rounded-md overflow-hidden border-white shadow-md'>
                        <div className=''>
                            <Image className="w-full" src="/muhammad-omer-ali.png" alt='Muhammad Omer Ali' height={40} width={40}/>
                        </div>
                        <div className='py-5 px-8 bg-white h-full'>
                            <span className='text-slate-600 2xl:text-base text-sm'>Chief Financial Officer</span>
                            <h4 className='2xl:text-2xl text-lg font-semibold text-[#2980b9]'>Muhammad Omer Ali</h4>
                        </div>
                    </div>
                    <div className='rounded-md overflow-hidden border-white shadow-md' >
                        <div className=''>
                            <Image className="w-full" src="/zahra-kashif.png" alt='Zahra Kashif'  height={40} width={40}/>
                        </div>
                        <div className='py-5 px-8 bg-white h-full'>
                            <span className='text-slate-600 2xl:text-base text-sm'>HR Lead / Project Engineer</span>
                            <h4 className='2xl:text-2xl text-lg font-semibold text-[#2980b9]'>Zahra Kashif</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
