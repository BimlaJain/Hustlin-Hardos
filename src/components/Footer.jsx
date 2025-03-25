import React from 'react'
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <div className='pt-8 pb-6 border-t'>
      <p className=" text-base text-center font-normal"> © Hustlin' Hardos {year}</p>

    </div>
  )
}

export default Footer
