import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className=' pt-[25px] border-b-2 max-w-[1920px] mx-auto'>
      <h1 className='font-normal xl:text-[157px] lg:text-[120px] md:text-[80px] text-4xl text-center leading-[100%]'>THE HUSTLIN’ HARDOS.</h1>
      <Image className='w-full' src="/assets/images/png/hero-image.png" alt='hero-image' width={1440} height={476}/>
    </div>
  )
}

export default Hero
