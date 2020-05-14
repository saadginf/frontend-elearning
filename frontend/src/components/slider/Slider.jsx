import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React , {useEffect}from 'react'
import Item from './Item'
import img from '../../assets/1073.png';
import img1 from '../../assets/1075.png';
import img2 from '../../assets/1025.png';
import img3 from '../../assets/1014.png';
import img4 from '../../assets/1051.png';
import img5 from '../../assets/1059.png';
import img6 from '../../assets/1068.png';
import img7 from '../../assets/1082.png';

import {connect} from 'react-redux';
import './slider.css'
import {getAllCourses} from '../../actions/coursesActions'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 5,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1600, min: 940 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 940, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const Slider = props => {
  useEffect(() => {
   props.getCourses()
    // Update the document title using the browser API

  }, []);
console.log(props.courses.length)
let items
if(props.courses.length){
 items = props.courses.map(course=> (
  <Item key={course._id} image={img}
    title={course.title}
    description={course.description}
   
    />
 ));

}else{
  items ='loading....'
}
    return (
       <>
       <div className="viewall">
       <a href="courses">View All Our Courses</a>
       </div>
        <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    
      >
      
    {items}

    <Item image={img1}
    title="Swift"
    description="This is a wider card with 
    supporting text below as a natural 
    supporting text below as a natural
     lead-in to additional content. Th
     is content is a little bit longer."
   
    />
    <Item image={img2}
    title="JavaScript"
    description="This is a wider card with 
    supporting text below as a natural 
    supporting text below as a natural
     lead-in to additional content. Th
     is content is a little bit longer."
   
    />
     <Item image={img3}
    title="HTML"
    description="This is a wider card with 
    supporting text below as a natural 
    supporting text below as a natural
     lead-in to additional content. Th
     is content is a little bit longer."
   
    />
      <Item image={img4}
    title="C++"
    description="This is a wider card with 
    supporting text below as a natural 
    supporting text below as a natural
     lead-in to additional content. Th
     is content is a little bit longer."
   
    />
     <Item image={img5}
    title="PHP"
    description="This is a wider card with 
    supporting text below as a natural 
    supporting text below as a natural
     lead-in to additional content. Th
     is content is a little bit longer."
   
    />
      <Item image={img7}
    title="JQUERY"
    description="This is a wider card with 
    supporting text below as a natural 
    supporting text below as a natural
     lead-in to additional content. Th
     is content is a little bit longer."
   
    />
      </Carousel>
      </>
    )
}

const mapStateToProps = ({courses}) => ({
  courses : courses.courses
});

const mapDispatchToProps = {
 getCourses: getAllCourses,
};



export default connect(mapStateToProps,mapDispatchToProps)(Slider);

