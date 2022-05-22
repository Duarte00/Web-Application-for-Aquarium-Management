import React,{useState,useEffect} from 'react'
import{useNavigate} from "react-router-dom";
import { Navbar, Container, Button, Form, Modal,Card } from 'react-bootstrap';
import Axios from 'axios';

function Aquarium(props) {

  return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={"http://localhost:3001/aquaImgPreview?aquaid="+props.id} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
  </Card.Body>
</Card>
  )
}

export default Aquarium;