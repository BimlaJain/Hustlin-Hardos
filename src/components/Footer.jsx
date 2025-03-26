import React from 'react'
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <div id='faqs' className='md:pt-8 md:pb-6 py-4 border-t'>
      <p className=" text-base text-center font-normal"> © Hustlin' Hardos {year}</p>

    </div>
  )
}

export default Footer
