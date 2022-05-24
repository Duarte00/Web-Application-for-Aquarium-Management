import React,{useState,useEffect} from 'react'
import { Card } from 'react-bootstrap';

function Fish(props) {
  return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={"http://localhost:3001/fishImgPreview?fishid="+props.idf} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
  </Card.Body>
</Card>
  )
}

export default Fish;