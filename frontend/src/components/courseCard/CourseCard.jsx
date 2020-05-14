import React from 'react'
import './CsCard.css'

const CourseCard = props => {
    return (
      <div className="card-courses">
       <div className="card card-course">
        <div className="course-description">
          <img src={props.image} alt="" />
          <div>
    <h2>{props.title}</h2>
            <p>
             {props.desc ? props.des :" With our interactive Java course, you’ll learn object-oriented Java programming and have the ability to write clear and valid"}
            </p>
          </div>
        </div>
        <div className="button-more">
           <a href="courseDetails" className="link-to-more">More</a>
        </div>
        <div className="stats-courses">
            <div>
                Lernears <br></br>
                <span className="stats-num">{props.learners ? props.learners : '12'}</span>
            </div>
            <div>
                Chapters <br></br>
                <span className="stats-num">{props.chapters ? props.chapters : '7'}</span>
            </div>
            <div>
                Level <br></br>
                <span className="stats-num">{props.level ? props.level : 'easy'}</span>
            </div>
        </div>
      </div>
      </div>
    );
}

export default CourseCard
