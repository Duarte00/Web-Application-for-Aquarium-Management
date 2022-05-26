import React,{useState,useEffect} from 'react'
import{useNavigate,useParams} from "react-router-dom";
import { Navbar, Button, Form, Modal,Container,Row,Col } from 'react-bootstrap';
import Product from '../components/product';
import  Axios  from 'axios';
function Products() {
    let navigate = useNavigate();
    const {ida}=useParams();
    const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [productnameReg, setproductnameReg] = useState('')
const [productQuantReg, setProductQuantReg] = useState('')
const [productImg, setproductImg] = useState(null);
const [aquaProducts,setAquaProducts] =useState([]);

const getProducts=()=>{
    Axios.get('http://localhost:3001/aquariumProduct?ida='+ida,{
  withCredentials: true,
  baseURL: "http://localhost:3001/",
}).then((res) => {
    setAquaProducts(res.data);
      console.log(res.data)
    })
  }
  
  const products = () => {
    const formData = new FormData();
      formData.append("typeD",  productnameReg);
      formData.append("quantityD",productQuantReg);
      formData.append("IDA",ida);
      formData.append("uploaded_file",productImg);
    Axios.post('http://localhost:3001/products', formData,{
      withCredentials: true,
      baseURL: "http://localhost:3001/",
    }).then((respose) => {
      console.log(respose);
      handleClose();
    })
  }

  useEffect(()=>{
      console.log(ida)
    getProducts();
  },[])


  return (
      <>

    < Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Produtos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome do produto</Form.Label>
              <Form.Control
                type="name"
                autoFocus 
                onChange={(e)=> {
                    setproductnameReg(e.target.value)
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control
                autoFocus
                onChange={(e)=> {
                    setProductQuantReg(e.target.value)
                  }}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose File</Form.Label>
              <Form.Control
                type="file"
                name="uploaded_file"
                onChange={ (e)=> setproductImg(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={products}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
      

    <div>
      <Container>
      <Row><Col><Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Fish20</Navbar.Brand>
          <Button className="buttonHomepage" onClick={ () => {
                    navigate('/login');
                }}>
                    Login</Button>
        </Container>
      </Navbar></Col></Row>
        <Row><Button className='rounded' onClick={handleShow}>+</Button><Col>
      {aquaProducts.length>0 ?aquaProducts.map((uf, index) => (
                <Col><Product idd={uf.IDD} name={uf.typeD}/></Col>
              )) : (<h1>Loading...</h1>)}
      </Col><Col></Col><Col></Col></Row>
      </Container>
      </div>
      </>
  )
}

export default Products;