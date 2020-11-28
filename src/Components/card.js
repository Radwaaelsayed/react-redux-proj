import React from 'react';
import {Link } from 'react-router-dom'
import {Card , Button ,Col  } from 'react-bootstrap';


const CardModel = ({place}) =>{
    console.log(place)
return(
    <Col lg={4} md={6} xs={12} >
    <Card style={{ width: '18rem' , margin:'10px',textAlign:'left'}}>
        <Card.Img variant="top" src={place.img} />
        <Card.Body>
            <Card.Title>{place.title}</Card.Title>
            <Card.Text>
           {place.description}
            </Card.Text>
            <Link to={`/places/${place.id}`}>
            <Button variant="outline-primary
            ">MORE INFO</Button>
            </Link>
            
        </Card.Body>
    </Card>
    </Col>
)
}

export default CardModel;