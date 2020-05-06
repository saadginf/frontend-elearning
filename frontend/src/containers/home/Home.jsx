import React from 'react'
import Bcard from '../../components/bigcard/BigCard'
import Slider from '../../components/slider/Slider'
import './home.css'
import MidCard from '../../components/midCard/MidCard'
import SecondCard from '../../components/secondCard/SecondCard'
import Button from '../../components/button/Button'
const Home = () => {
    return (
        <div>
            <Bcard/>
            <Slider/>
            <SecondCard/>
            <MidCard/>
          
           <div className="start-now">
               What are you waitin for! <br></br>
               Let's Start Now!
            </div>
           
         

        </div>
    )
}

export default Home
