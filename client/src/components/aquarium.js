import React from 'react'
import{useNavigate} from "react-router-dom";
import {Card } from 'react-bootstrap';

function Aquarium(props) {

  const navigate=useNavigate();

  return (
<Card style={{ width: '18rem' }} onClick={()=>navigate("/AquariumInfo/"+props.id)}>

  <Card.Img variant="top" src={"http://localhost:3001/aquaImgPreview?aquaid="+props.id} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    
  </Card.Body>
</Card>
  )
}

export default Aquarium;