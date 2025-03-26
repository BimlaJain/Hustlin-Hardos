import BreakingNews from '@/components/BreakingNews'
import Hero from '@/components/Hero'
import Minting from '@/components/Minting'
import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/common/Header'
import Roadmap from '@/components/Roadmap'
import LatestTweets from '@/components/LatestTweets'
import Teams from '@/components/Teams'
import Faqs from '@/components/Faqs'
import BackToTop from '@/components/common/BackToTop'

const page = () => {
  return (
    <>
      <Header/>
      <Hero />
      <BreakingNews />
      <LatestTweets />
      <Minting />
      <Roadmap />
      <Teams/>
      <Faqs/>
      <Footer />
      <BackToTop/>
    </>
  )
}

export default page
