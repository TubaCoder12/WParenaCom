import React from 'react'
import Image from 'next/image'
import ContactForm from './Contact-us'
import Link from 'next/link'

const AdvertiseWithUs = () => {
    return (
        <>
        <div className="px-5 xs:px-10 md:px-20">
            {/* Heading Section */}
            <div className="text-left">
                <h2 className="font-semibold text-gray-800 my-3 text-2xl xs:text-4xl xl:text-5xl">
                    Advertise With Us
                </h2>
                <p className="text-sm leading-6 lg:text-base lg:leading-7">
                    We offer banner and link advertisements here on WPArena. Subscriptions will renew every month. 
                    Banner advertisements and other ad opportunities are managed by us. Below are the spots available for ads.
                </p>
            </div>

            {/* Banner Advertisement Section */}
            <div className="text-left mt-6">
                <h2 className="font-semibold text-gray-800 mb-3 text-2xl xs:text-4xl xl:text-5xl">
                    Banner Advertisement Spots
                </h2>
                <h4 className="text-lg font-medium xs:text-xl xl:text-2xl">
                    Banner Specifications are below.
                </h4>
            </div>

            {/* Packages Container */}
            <div className="flex flex-col lg:flex-row items-center justify-center  py-7">
                {/* Package 1 */}
                <div className="text-center w-full lg:w-1/2">
                <div className='flex justify-start px-8'>
                    <h3 className="text-gray-800   font-semibold mb-4 text-xl lg:text-2xl xl:text-3xl">
                        PACKAGE-1
                    </h3>
                    </div>
                    <div className="flex justify-center">
                        <Image 
                            src="/packageone.jpg" 
                            width={1200} 
                            height={1200} 
                            alt="Package One" 
                            className="w-full max-w-[800px] object-cover rounded-md"
                        />
                    </div>
                </div>

                {/* Package 2 */}
                <div className="text-center w-full lg:w-1/2">
                <div className='flex justify-start px-8'>
                    <h3 className="text-gray-800 font-semibold mb-4 text-xl lg:text-2xl xl:text-3xl">
                        PACKAGE-2
                    </h3>
                    </div>
                    <div className="flex justify-center">
                        <Image 
                            src="/packagetwo.jpg" 
                            width={1200} 
                            height={1200} 
                            alt="Package Two" 
                            className="w-full max-w-[800px] object-cover rounded-md"
                        />
                    </div>
                </div>
            </div>
            <div className=''>
                    <h2 className='text-gray-800 font-semibold mb-3 xl:text-5xl xs:text-4xl text-2xl'>Specifications</h2>
                    <p className='text-gray-800 lg:text-base lg:leading-7 text-sm leading-6'>If your advertisements query is not listed above, don’t worry, <Link href="/Contact-us"><span className='text-blue-400'>contact us</span></Link>  for more pricing options and details. We are always open to new ideas. Fill the form below to get started.</p>
                </div>
        </div>
       
        <ContactForm/>
        </>
    )
}

export default AdvertiseWithUs
