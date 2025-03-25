import React from 'react'
import { TEAM_DATA } from '@/utils/helper'
import CommonSlider from './common/CommonSlider'

const Team = () => {
    return (
        <>
            <CommonSlider data={TEAM_DATA} title="Team" isTweets={false} />
        </>
    )
}

export default Team
