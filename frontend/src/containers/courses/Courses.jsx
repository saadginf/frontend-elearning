import React from 'react'
import './courses.css'
import CourseCard from "../../components/courseCard/CourseCard"
const Courses = props => {
    console.log(props.location)
    return (

        <div className="course-cards-list">
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <div className="cl-float"></div>
        </div>
    )
}

export default Courses
