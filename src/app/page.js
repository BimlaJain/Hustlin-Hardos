import LatestTweets from '@/components/LatestTweets'
import Roadmap from '@/components/Roadmap'
import Team from '@/components/team'
import React from 'react'

const page = () => {
  return (
    <div>
      <LatestTweets/>
      <Roadmap />
      <Team/>
    </div>
  )
}

export default page
