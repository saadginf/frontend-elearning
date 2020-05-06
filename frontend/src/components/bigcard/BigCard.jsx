import React from 'react'
import './bcard.css'
import Button from '../button/Button'
import Card from "../../components/card/Card"
const BigCard = props => {
    return (
    <div className="big-card">
         <div className='presenation-card'>
           <Card
           contain="450px"
           color="rgba(0, 0, 0, 0.8)"
           >Learn,<br></br>Regardless Where
           Nor When You are!</Card>
           <Button
           contain
           color="rgba(0, 0, 0, 0.7
            )"
           >
            Start Learning Now
           </Button>
        </div>
    </div>
    )
}

export default BigCard
