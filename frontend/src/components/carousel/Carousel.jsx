import React,{ Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import Background1 from "../../assets/team1.jpg"
import Background2 from "../../assets/team2.jpg"
import Background3 from "../../assets/team3.jpg"
import "./Carousel.css"
class Carousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      width:"50%",
      alignItems: "middle"
    };
  }
  static get CARD_STYLE1() {
    return {
  
        height: "500px",
        width: "400px",
        paddingTop: "10px",
        borderRadius: "10px",
        boxSizing: "border-box",
        backgroundSize: 'cover',
      backgroundImage: `url(${Background1})`
    };
}
  static get CARD_STYLE2() {
    return {
    
        height: "500px",
        width: "400px",
        paddingTop: "10px",
        borderRadius: "10px",
        boxSizing: "border-box",
        backgroundSize: 'cover',
      backgroundImage: `url(${Background2})`
    };
    
  }
  static get CARD_STYLE3() {
    return {
      height: "500px",
      width: "400px",
      paddingTop: "10px",
      borderRadius: "10px",
      boxSizing: "border-box",
      backgroundSize: 'cover',
      backgroundImage: `url(${Background3})`
    };
}

  render() {
    return (
    
    <div style={Carousel.CONTAINER_STYLE} id="carousel">
        
        <ReactCardCarousel autoplay={true} autoplay_speed={3500}>
          <div style={Carousel.CARD_STYLE1}>
          <div className="team-name">
            <strong>Amine, </strong>25ans <br></br>
            Architecte 
          </div>
          </div>
          <div style={Carousel.CARD_STYLE2}> <div className="team-name">
            <strong>Sarah, </strong>28ans <br></br>
            Dev Ops 
          </div></div>
          <div style={Carousel.CARD_STYLE3}> <div className="team-name">
            <strong>Anna, </strong>24ans <br></br>
            Dev Senior 
          </div></div>
        </ReactCardCarousel>
      </div>
    );
  }
}
export default Carousel