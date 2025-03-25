import BreakingNews from '@/components/BreakingNews'
import Hero from '@/components/Hero'
import Minting from '@/components/Minting'
import React from 'react'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Header from '@/components/common/Header'
import Roadmap from '@/components/Roadmap'
import LatestTweets from '@/components/LatestTweets'
import Team from '@/components/team'
const page = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <BreakingNews />
      <LatestTweets />
      <Minting />
      <Roadmap />
      <Team/>
      <Faq />
      <Footer />
    </div>
  )
}

export default page
