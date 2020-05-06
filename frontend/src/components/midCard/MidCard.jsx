import React from 'react'
import "./mCard.css"
import Carousel from '../carousel/Carousel'
const MidCard = () => {
    return (
      <div className="m-card">
        <div className="team-presetation">
          <h1>The Best Team Ever !</h1>
          <div>
            Become who you want to be. Choose your own career path and earn a
            diploma online with hands-on projects and weekly one-on-one
            mentorship sessions with a dedicated professional in your field.
            Gain experience on your CV with apprenticeship programs.
          </div>
        </div>
        
        <Carousel />
        
      </div>
    );
}

export default MidCard
