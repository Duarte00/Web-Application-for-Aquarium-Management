import React from 'react'
import{useNavigate} from "react-router-dom";
import {Card } from 'react-bootstrap';

function Aquarium(props) {

  const navigate=useNavigate();

  return (
<Card border='0' style={{ width: '20rem' }} onClick={()=>navigate("/AquariumInfo/"+props.id)}>
  <Card.Body>
    <Card.Img id="imgAqua" src={"http://localhost:3001/aquaImgPreview?aquaid="+props.id} />
    <div className='textAquainfo1'>Dimensão: {props.dimension}L</div>
    <Card.Title className='textAquainfo1'>{props.name}</Card.Title>
  </Card.Body>
</Card>
  )
}

export default Aquarium;