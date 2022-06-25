import React,{useState} from 'react'
import { Card, Modal, Button } from 'react-bootstrap';
import  Axios  from 'axios';

function Fish(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteFish=()=>{
    Axios.get('http://localhost:3001/fishesDelete?fishid='+props.idf,{
  withCredentials: true,
  baseURL: "http://localhost:3001/",
  }).then((respose) => {
    console.log(respose);
    handleClose();
    window.location.reload(false);
  })
}

  return (
    <>

      < Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apagar peixe?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="secondary" onClick={handleClose}>
            NÃO
          </Button>
          <Button variant="primary" onClick={deleteFish}>
            Sim
          </Button>
          </Modal.Body>
      </Modal>
      

<Card style={{ width: '18rem' }}>
  <Button onClick={handleShow}>-</Button>
  <Card.Img variant="top" src={"http://localhost:3001/fishImgPreview?fishid="+props.idf} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
  </Card.Body>
</Card>
  </>
  )
}

export default Fish;