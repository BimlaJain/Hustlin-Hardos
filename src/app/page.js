import BreakingNews from '@/components/BreakingNews'
import Hero from '@/components/Hero'
import Minting from '@/components/Minting'
import React from 'react'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Header from '@/components/common/Header'
const page = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <BreakingNews />
      <Minting />
      <Faq />
      <Footer/>
    </div>
  )
}

export default page