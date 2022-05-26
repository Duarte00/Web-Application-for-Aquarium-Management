import React,{useState,useEffect} from 'react'
import { Card } from 'react-bootstrap';

function Product(props) {
  return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={"http://localhost:3001/productImgPreview?productid="+props.idd} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
  </Card.Body>
</Card>
  )
}

export default Product;