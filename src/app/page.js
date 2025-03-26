import BreakingNews from '@/components/BreakingNews'
import Hero from '@/components/Hero'
import Minting from '@/components/Minting'
import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/common/Header'
import Roadmap from '@/components/Roadmap'
import LatestTweets from '@/components/LatestTweets'
import Faq from '@/components/faq'
import Team from '@/components/team'

const page = () => {
  return (
    <>
      <Header/>
      <Hero />
      <BreakingNews />
      <LatestTweets />
      <Minting />
      <Roadmap />
      <Team/>
      <Faq />
      <Footer />
    </>
  )
}

export default page
