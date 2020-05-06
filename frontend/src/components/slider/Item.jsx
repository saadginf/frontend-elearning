import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from '../../components/button/Button'
import './item.css'
const Item = props => {
    return (
        <div> 
    <Card  style={{ width: '18rem' }}>
    <Card.Body>
      <img src={props.image}></img>
    <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.description}
      </Card.Text>
      <Button
       contain
       color="rgba(63, 67, 0, 0.788)"
      >Take it!</Button>
    </Card.Body>
    </Card>
        </div>
    )
}

export default Item
