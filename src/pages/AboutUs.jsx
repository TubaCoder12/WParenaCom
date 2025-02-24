import React from 'react'
import Image from 'next/image';
import YoutubeVideo from './YoutubeVideo';
import OurTeam from './OurTeam';
import Testimonial from './Testimonial';

const AboutUs = () => {
  return (
    <div>
          <div className="md:px-20 xs:px-10 px-5">
                <div className="flex lg:justify-between justify-center items-center lg:flex-row flex-col">
                    <div className="lg:w-4/6 w-full">
                        <h2 className='xl:text-5xl lg:text-4xl xs:text-3xl text-2xl font-semibold my-4'>About WPArena</h2>
                        <p className='font-medium md:leading-7 leading-6 md:text-base text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                        <ul className="my-4 ms-9 md:font-bold font-medium md:leading-9 leading-7 bg-no-repeat " style={{ listStyleImage: `url("/arrow-list.png")` }}>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>It is a long established fact that a reader will be distracted by the readable content of a page.</li>
                            <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</li>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have humour.</li>
                        </ul>
                        <div className=''>
                            <div className='flex gap-5 items-center mb-5'>
                                <div className='xs:h-24 h-16 xs:w-24 w-16 bg-gray-800 rounded-full flex items-center justify-center flex-none'>
                                    <Image height={40} width={40} src="/wpa-expert-team.png" alt='Expert Team' />
                                </div>
                                <div className=''>
                                    <h3 className='font-semibold text-[#2980b9] xl:text-3xl lg:text-2xl text-xl'>Expert Team</h3>
                                    <p className='md:leading-7 leading-6 md:text-base text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                                </div>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <div className='xs:h-24 h-16 xs:w-24 w-16 bg-gray-800 rounded-full flex items-center justify-center flex-none'>
                                    <Image height={40} width={40} src="/wpa-support.png" alt='Expert Team' />
                                </div>
                                <div className=''>
                                    <h3 className='font-semibold text-[#2980b9] xl:text-3xl lg:text-2xl text-xl'>24/7 Support</h3>
                                    <p className='md:leading-7 leading-6 md:text-base text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-fit w-full lg:block flex justify-center lg:mt-0 mt-8'>
                        <Image height={653} width={437} src="/wpaaboutusteam.png" alt='About us' />
                    </div>
                </div>
            </div>
            <div className=''>
                <YoutubeVideo/>
            </div>
            <div className="md:px-20 xs:px-10 px-5">
                <div className="flex lg:justify-between justify-center items-center lg:flex-row flex-col-reverse">
                    <div className='lg:w-2/6 w-full flex justify-center'>
                        <div className='border-8 border-solid border-[#ebf1ff] rounded-full h-80 w-80 p-8'>
                            <Image className="flex items-center justify-center object-contain mx-auto h-full" height={100} width={230} src="/wpa-aboutus-our-values.png" alt='About us' />
                        </div>
                    </div>
                    <div className="lg:w-4/6 w-full">
                        <h2 className='xl:text-5xl lg:text-4xl xs:text-3xl text-2xl font-semibold my-4'>Our Values</h2>
                        <p className='font-medium md:leading-7 leading-6 md:text-base text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                        <ul className="my-4 ms-9 md:font-bold font-medium md:leading-9 leading-7 bg-no-repeat " style={{ listStyleImage: `url("/arrow-list.png")` }}>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>It is a long established fact that a reader will be distracted by the readable content of a page.</li>
                            <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</li>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have humour.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="md:px-20 xs:px-10 px-5">
                <div className="flex lg:justify-between justify-center items-center lg:flex-row flex-col">
                    <div className="lg:w-4/6 w-full">
                        <h2 className='xl:text-5xl lg:text-4xl xs:text-3xl text-2xl font-semibold my-4'>Our Vision</h2>
                        <p className='font-medium md:leading-7 leading-6 md:text-base text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                        <ul className="my-4 ms-9 md:font-bold font-medium md:leading-9 leading-7 bg-no-repeat " style={{ listStyleImage: `url("/arrow-list.png")` }}>
                            <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</li>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have humour.</li>
                        </ul>
                    </div>
                    <div className='lg:w-2/6 w-full flex justify-center'>
                        <div className='border-8 border-solid border-[#ebf1ff] rounded-full h-80 w-80 p-8'>
                            <Image className="flex items-center justify-center object-contain mx-auto h-full" height={100} width={230} src="/wpa-aboutus-vision.png" alt='About us' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:px-20 xs:px-10 px-5">
                <div className="flex lg:justify-between justify-center items-center lg:flex-row flex-col-reverse">
                    <div className='lg:w-2/6 w-full flex justify-center'>
                        <div className='border-8 border-solid border-[#ebf1ff] rounded-full h-80 w-80 p-8'>
                            <Image className="flex items-center justify-center object-contain mx-auto h-[100%]" height={100} width={230} src="/wpa-aboutus-vision.png" alt='About us' />
                        </div>
                    </div>
                    <div className="lg:w-4/6 w-full">
                        <h2 className='xl:text-5xl lg:text-4xl xs:text-3xl text-2xl font-semibold my-4'>Our Mission</h2>
                        <p className='font-medium md:leading-7 leading-6 md:text-base text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                        <div className='my-5'>
                            <div className='flex gap-5 items-center mb-5'>
                                <div className='h-16 w-16 border-2 border-solid border-[#2980b9] rounded-full flex items-center justify-center flex-none'>
                                    <Image height={34} width={34} src="/our-mission-list-icon.png" alt='Expert Team' />
                                </div>
                                <div className=''>
                                    <p className='font-medium md:leading-7 leading-6 md:text-base text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                                </div>
                            </div>
                            <div className='flex gap-5 items-center mb-5'>
                                <div className='h-16 w-16 border-2 border-solid border-[#2980b9] rounded-full flex items-center justify-center flex-none'>
                                    <Image height={34} width={34} src="/our-mission-list-icon.png" alt='Expert Team' />
                                </div>
                                <div className=' '>
                                    <p className='font-medium md:leading-7 leading-6 md:text-base text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                                </div>
                            </div>
                            <div className='flex gap-5 items-center mb-5'>
                                <div className='h-16 w-16 border-2 border-solid border-[#2980b9] rounded-full flex items-center justify-center flex-none'>
                                    <Image height={34} width={34} src="/our-mission-list-icon.png" alt='24/7 support' />
                                </div>
                                <div className=''>
                                    <p className='font-medium md:leading-7 leading-6 md:text-base text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took.</p>
                                </div>
                            </div>
                        </div>
                        <ul className="my-4 ms-9 md:font-bold font-medium md:leading-9 leading-7 bg-no-repeat " style={{ listStyleImage: `url("/arrow-list.png")` }}>
                            <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</li>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have humour.</li>
                        </ul>
                    </div>
                </div>
            </div> 
            <OurTeam/>
            <Testimonial/>
    </div>
  )
}

export default AboutUs
