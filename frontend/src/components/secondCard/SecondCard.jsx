import React from 'react'
import Item from "./Item"
import Image1 from '../../assets/electronics.png'
import Image2 from '../../assets/laptop.png'
import Image3 from '../../assets/chat.png'
import Image4 from '../../assets/website.png'
import Button from '../../components/button/Button'
import './sCard.css'
const SecondCard = () => {
    return (
        <div className="s-card">
          <div className="s-card-items">
           <Item uri={Image4} txt="Totaly Responsive Platform"/>  
            <Item uri={Image2} txt="+1000 Hours of videos"/>
            <Item uri={Image1} txt="Have A Live Assistance"/>
            <Item uri={Image3} txt="Ask, Discuss in our Frorum"/> 
            </div>
            <Button
       contain="300px"
       color="rgba(63, 67, 0, 0.788)"
      >Join us!</Button>
        </div>
    )
}

export default SecondCard
