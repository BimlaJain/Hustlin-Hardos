'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const CommonSlider = ({ data, title , isTweets }) => {
  return (
    <>
      <div className="container max-w-[1172px] mx-auto px-4 relative">
        <h2 className={`lg:text-[80px] md:text-6xl text-4xl leading-[104%] font-normal  lg:py-[89px] md:py-10 py-7  text-black ${isTweets ? 'uppercase' : 'none'}`}>{title}</h2>
        <button className="custom-prev absolute  top-[45%] max-sm:top-[35%] xl:right-[5%] sm:right-[10%] cursor-pointer right-[12%] z-10 w-[18px] h-9"><Image src="/assets/images/svg/left-arrow.svg" alt='left-arrow' width={18} height={36} /></button>
        <button className="custom-next absolute  top-[45%] max-sm:top-[35%] right-[4%] xl:right-0 z-10 cursor-pointer w-[18px] h-9"><Image src="/assets/images/svg/right-arrow.svg" alt='right-arrow' width={18} height={36} /></button>
      </div>
      <div className='border border-black w-full'></div>
      <div className="container max-w-[1172px] mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={isTweets?3:2}
           loop={true}
          navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} 
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: isTweets ? 3 : 2,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <div style={!isTweets ? { backgroundImage: `url('/assets/images/png/team-bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
 className={`border-black p-[26px]  flex flex-col  ${index % 2 === 0 ? 'border-l-1 border-r-1 ' : 'border-l-1 border-r-1'} ${isTweets ? 'flex flex-col items-start justify-center h-[259px]' : 'flex flex-col items-center justify-center h-[326px] '}`}>
                 
                  <Image src="/assets/images/png/hustlin-short-pic.png" alt='hustlin' width={88} height={88} className={`size-[88px] rounded-full mx-auto mb-4 ${isTweets ? 'hidden' : 'block'}`} />
                 
                  <h3 className={`md:text-4xl text-3xl text-center ${isTweets ? 'text-left text-black font-semibold pb-2' : 'text-center text-[#70675F] font-[900] pb-4'}`}>{item.title}</h3>
                  <div className={`flex gap-[11px] pb-3 ${isTweets ? 'block' : 'hidden'}`}>
                    <Image src="/assets/images/svg/twitter.svg" alt='twitter' width={22} height={18} />
                    <p className={`text-sm font-normal`}>{ item.date}</p>
                  </div>
                  <p className={` ${isTweets ? 'text-left ' : 'text-center '}text-center  max-w-[407px] mx-auto`}>{item.description}</p>
                  <Link href="#">
                  <p className={`underline font-normal text-sm pt-3  ${isTweets ? 'block' : 'hidden'}`}>Read More ...</p>
                    
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='border border-black w-full'></div>
    </>
  );
};

export default CommonSlider;
