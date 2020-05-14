import React from 'react'
import { Player } from 'video-react';
import './Course.css'
import img7 from '../../assets/1073.png';
import vid from '../../assets/welcome.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
const Course = () => {
    return (
        <div className="course-detail-container">
        <div className="bande-course">
            <div className="title-course">
                Learn to Code With Python
            </div>
            <div className="level-hours">

            </div>
        </div>
        <div className="course-details">
        <div className='video-course'>
          <Player
      playsInline
      poster={img7}
      src={vid}
    />
    </div>
    </div>
        </div>
    )
}

export default Course
