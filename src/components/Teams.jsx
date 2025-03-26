import React from 'react'
import { TEAM_DATA } from '@/utils/helper'
import CommonSlider from './common/CommonSlider'

const Teams = () => {
    return (
        <div id='team'>
            <CommonSlider data={TEAM_DATA} title="Team" isTweets={false} />
        </div>
    )
}

export default Teams
