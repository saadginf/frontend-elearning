import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import Item from './Item'
import img from '../../assets/1073.png';
import './slider.css'
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


const Slider = () => {
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
    
    <Item image={img}
    title="Card Title 1"
    description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
   
    />
   
      </Carousel>
      </>
    )
}

export default Slider

