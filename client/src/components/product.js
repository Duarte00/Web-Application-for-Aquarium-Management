import React,{useState} from 'react'
import { Card, Modal, Button } from 'react-bootstrap';
import  Axios  from 'axios';

function Product(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteProduct=()=>{
    Axios.get('http://localhost:3001/productDelete?productid='+props.idd,{
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
          <Modal.Title>Apagar produto?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="secondary" onClick={handleClose}>
            NÃO
          </Button>
          <Button variant="primary" onClick={deleteProduct}>
            Sim
          </Button>
          </Modal.Body>
      </Modal>

              <Card  id='cardAquaInfo4'>
                <Card.Body>
                      <button className='botao2' id="botao5"  onClick={handleShow}>-</button>
                      <Card.Img  id="imgFish"  src={"http://localhost:3001/productImgPreview?productid="+props.idd} />
                      <div  id="cardFish1">Nome:{props.name} Quat:{props.quantityD}</div>
                  </Card.Body>
              </Card>
</>
  )
}

export default Product;