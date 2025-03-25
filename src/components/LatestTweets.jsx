import { TWEETS_DATA } from '@/utils/helper'
import React from 'react'
import CommonSlider from './common/CommonSlider'

const LatestTweets = () => {
  return (
   
      <>
      <CommonSlider data={TWEETS_DATA} title="Latest Tweets" isTweets={true} />
      </>
  )
}

export default LatestTweets

