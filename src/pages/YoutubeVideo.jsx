import React from 'react'
const YoutubeVideo = () => {
  return (
    <>
      <div className="my-8 md:mb-24 bg-no-repeat" style={{ backgroundImage: `url(${"/youtube-video-banner.png"})` }}>
        <div className="md:px-8 px-4 md:py-10 py-4 h-full m-auto max-h-[510px] max-w-[1034px] w-full relative">
          <div className='relative' style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
              className='bg-no-repeat bg-cover rounded-lg absolute top-0 left-0 w-full h-full pt-[3%] pb-[6%] pl-[11%] pr-[9%]'
              style={{ border: 'none', borderRadius: '1rem', backgroundImage: `url(${"/wpa-laptop-shape.png"})` }} 
              src="https://www.youtube.com/embed/4r3XWj269_g?rel=0&amp;showinfo=0"
              allowFullScreen width={500} height={260}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default YoutubeVideo