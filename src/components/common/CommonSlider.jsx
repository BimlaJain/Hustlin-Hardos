'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import LatestTweets from '../LatestTweets';
import CommonHeading from './CommonHeading';

const CommonSlider = ({ data, title , isTweets }) => {
  return (
    <div >
      <div className="container max-w-[1172px] mx-auto px-4 relative">
        <CommonHeading MyText={title}/>
        <button className="custom-prev absolute  top-[45%] xl:right-[5%] sm:right-[10%] right-[15%] z-10 w-[18px] h-9"><Image src="/assets/images/svg/left-arrow.svg" alt='left-arrow' width={18} height={36} /></button>
        <button className="custom-next absolute  top-[45%] right-[4%] xl:right-0 z-10 w-[18px] h-9"><Image src="/assets/images/svg/right-arrow.svg" alt='right-arrow' width={18} height={36} /></button>
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
              <div className="">
                <div className={`border-black p-[26px]  flex flex-col  ${index % 2 === 0 ? 'border-l-2 border-r-1 ' : 'border-l-1 border-r-2'} ${isTweets ? 'flex flex-col items-start justify-center h-[259px]' : 'flex flex-col items-center justify-center h-[326px] team-bg'}`}>
                 
                  <Image src="/assets/images/png/hustlin-short-pic.png" alt='hustlin' width={88} height={88} className={`size-[88px] rounded-full mx-auto mb-4 ${isTweets ? 'hidden' : 'block'}`} />
                 
                  <h3 className={`md:text-4xl text-3xl pb-4 text-center ${isTweets ? 'text-left text-black font-semibold' : 'text-center text-[#70675F] font-[900]'}`}>{item.name}</h3>
                  <div className={`flex gap-[11px] pb-3 ${isTweets ? 'block' : 'hidden'}`}>
                    <Image src="/assets/images/svg/twitter.svg" alt='twitter' width={22} height={18} />
                    <p className={`text-sm font-normal`}>{ item.date}</p>
                  </div>
                  <p className={` ${isTweets ? 'text-left ' : 'text-center '}text-center  max-w-[407px] mx-auto`}>{item.description}</p>
                  <p className={`underline font-normal text-sm pt-3 ${isTweets ? 'block' : 'hidden'}`}>Read More ...</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='border border-black w-full'></div>
    </div>
  );
};

export default CommonSlider;
