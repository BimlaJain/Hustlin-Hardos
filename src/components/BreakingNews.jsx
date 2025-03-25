import React from 'react'
import Image from 'next/image'
const BreakingNews = () => {
  return (
    <div className=''>
      <div className="container max-w-[1140px] mx-auto px-4">
        <h2 className='md:text-[72px] text-5xl max-w-[1140px] font-normal leading-[140%] pt-[67px] pb-[64px]'>“BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT project of 2022"</h2>
        <div className="flex max-lg:flex-col border-2 w-full">
          <div className='xl:py-[86px] py-6 md:pl-[43px] md:pr-[52px] px-4'>
            <p className='font-normal text-base leading-[100%]'>March 1, 2022 by Editor Hardo</p>
            <p className='font-normal md:text-lg text-base lg:max-w-[475px] py-4 leading-[150%]'>Hustlin' Hardos is a collection of 9,999 NFT characters on the Ethereum Blockchain, inspired by the business/finance world, hustler culture and web3 aesthetics.

              Each Hustlin' Hardo is a completely original and unique combination of hundreds of potential attributes such as luxury watches, clothing, or accessories - all with provable degrees of rarity. The collection features truly unique and powerful artwork, while offering its holders first-of-its-kind utility. Your Huslin’ Hardo NFT is your gateway to The Boardroom, one of the most rewarding and engaging online communities
            </p>
            <a href="#" className='underline font-normal text-base leading-[100%]'>Read More...</a>
          </div>
          <div className='border border-l-2'>
            <Image className='object-cover w-full h-full' src="/assets/images/png/news-boy-image.png" alt='news-boy' width={570} height={572}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreakingNews
