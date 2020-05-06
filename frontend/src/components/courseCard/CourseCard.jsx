import React from 'react'
import './CsCard.css'
import testimg from '../../assets/1073.png'
const CourseCard = () => {
    return (
      <div className="card-courses">
       <div className="card card-course">
        <div className="course-description">
          <img src={testimg} alt="" />
          <div>
            <h2>Title</h2>
            <p>
              With our interactive Java course, you’ll learn object-oriented
              Java programming and have the ability to write clear and valid
              
            </p>
          </div>
        </div>
        <div className="button-more">
            <button>More</button>
        </div>
        <div className="stats-courses">
            <div>
                Lernears <br></br>
                <span className="stats-num">125</span>
            </div>
            <div>
                Chapters <br></br>
                <span className="stats-num">125</span>
            </div>
            <div>
                Level <br></br>
                <span className="stats-num">125</span>
            </div>
        </div>
      </div>
      </div>
    );
}

export default CourseCard
