import React from 'react'
import TopFrame from '../Components/skeletons/TopFrame';
import {TOPFRAMETEXT} from "../../constants";

const UpcomingTreks = () => {
  return (
    <div>
        <TopFrame firstHeading={TOPFRAMETEXT.upcomingTreks.firstHeading} secondHeading={TOPFRAMETEXT.upcomingTreks.secondHeading} text={TOPFRAMETEXT.upcomingTreks.text}/>

        
    </div>
  )
}

export default UpcomingTreks
