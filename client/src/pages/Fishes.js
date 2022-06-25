import React,{useState,useEffect} from 'react'
import{useNavigate,useParams} from "react-router-dom";
import { Navbar, Button, Form, Modal,Container,Row,Col } from 'react-bootstrap';
import Fish from '../components/fish';
import  Axios  from 'axios';
function Fishes() {
    let navigate = useNavigate();
    const {ida}=useParams();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [fishnameReg, setFishnameReg] = useState('')
    const [fishQuantReg, setFshReg] = useState('')
    const [fishImg, setFishImg] = useState(null);
    const [aquaFishes,setAquaFishes] =useState([]);
   
const getFishes=()=>{
    Axios.get('http://localhost:3001/aquariumFish?ida='+ida,{
  withCredentials: true,
  baseURL: "http://localhost:3001/",
}).then((res) => {
    setAquaFishes(res.data);
      console.log(res.data)
    })
  }
  
  const fishes = () => {
    const formData = new FormData();
      formData.append("species",  fishnameReg);
      formData.append("quantityF",fishQuantReg);
      formData.append("IDA",ida);
      formData.append("uploaded_file",fishImg);
    Axios.post('http://localhost:3001/fishes', formData,{
      withCredentials: true,
      baseURL: "http://localhost:3001/",
    }).then((respose) => {
      console.log(respose);
      handleClose();
      window.location.reload(false);
    })
  }


  useEffect(()=>{
      console.log(ida)
    getFishes();
  },[])


  return (
      <>

    < Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Peixe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome/Espécie</Form.Label>
              <Form.Control
                type="name"
                autoFocus 
                onChange={(e)=> {
                    setFishnameReg(e.target.value)
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control
                type="numerical"
                autoFocus
                onChange={(e)=> {
                    setFshReg(e.target.value)
                  }}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose File</Form.Label>
              <Form.Control
                type="file"
                name="uploaded_file"
                onChange={ (e)=> setFishImg(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={fishes}>
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
      {aquaFishes.length>0 ?aquaFishes.map((uf, index) => (
                <Col><Fish idf={uf.IDF} name={uf.name}/></Col>
              )) : (<h1>Loading...</h1>)}
      </Col><Col></Col><Col></Col></Row>
      </Container>
      </div>
      </>
  )
}

export default Fishes;