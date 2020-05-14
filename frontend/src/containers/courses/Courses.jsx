import React, {useEffect} from 'react'
import './courses.css'
import CourseCard from "../../components/courseCard/CourseCard"
import img1 from '../../assets/1075.png';
import img2 from '../../assets/1025.png';
import img3 from '../../assets/1014.png';
import img4 from '../../assets/1051.png';
import img5 from '../../assets/1059.png';
import img6 from '../../assets/1068.png';
import img7 from '../../assets/1082.png';
import {getAllCourses} from '../../actions/coursesActions'
import {connect} from 'react-redux';
import img from '../../assets/1073.png';
const Courses = props => {
    useEffect(() => {
        props.getCourses()
         // Update the document title using the browser API
     
       }, []);
       let items
if(props.courses.length){
 items = props.courses.map(course=> (
  <CourseCard key={course._id} image={img}
  id={course._id}  
  title={course.title}
    description={course.description}
    learners ={course.learners}
    level={course.level}   
    chapters={course.nbChapters}
    />
 ));

}else{
  items ='loading....'
}
    return (

        <div className="course-cards-list">
       
        
        {items}
        <CourseCard image={img1} title='Swift' />
        <CourseCard image={img2} title='JS'/>
        <CourseCard image={img3} title='HTML'/>
        <CourseCard image={img4} title='C++'/>
        <CourseCard image={img5} title='PHP'/>
        <CourseCard image={img6} title='JAVA'/>
        <CourseCard image={img7} title='JQuery'/>

        <div className="cl-float"></div>
        </div>
    )
}
const mapStateToProps = ({courses}) => ({
    courses : courses.courses
  });
  
  const mapDispatchToProps = {
   getCourses: getAllCourses,
  };
  
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Courses);
  