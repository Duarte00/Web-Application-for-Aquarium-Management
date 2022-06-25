import React,{useState,useEffect} from 'react'
import{useNavigate,useParams} from "react-router-dom";
import { Container,Row,Col, Navbar, Button, Modal } from 'react-bootstrap';
import Aquarium from '../components/aquarium';
import  Axios  from 'axios';

function AquariumInfo() {
  let navigate = useNavigate();
  const {ida} = useParams();
  const [show, setShow] = useState(false);
  const [aquarium,setAquarium] =useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getAquarium=()=>{
    Axios.get('http://localhost:3001/userAquarium?ida='+ida,{
  withCredentials: true,
  baseURL: "http://localhost:3001/",
}).then((res) => {
  setAquarium(res.data);
      console.log(res.data[0])
    })
  }

  const deleteAquariums=()=>{
    Axios.get('http://localhost:3001/userAquariumDelete?ida='+ida,{
  withCredentials: true,
  baseURL: "http://localhost:3001/",
  }).then((respose) => {
    console.log(respose);
    handleClose();
    navigate('/profile');
  })
}

  useEffect(()=>{
    getAquarium();
  },[])

  const [userAquariums,setUserAquariums] =useState([]);

  return (
    <>
< Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apagar aquário?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="secondary" onClick={handleClose}>
            NÃO
          </Button>
          <Button variant="primary" onClick={deleteAquariums}>
            Sim
          </Button>
          </Modal.Body>
      </Modal>

    <div>
      <Container>
      <Row><Col>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Fish20</Navbar.Brand>
          <Button className="buttonHomepage" onClick={ () => {
                    navigate('/login');
                }}>
                    Login</Button>
        </Container>
      </Navbar></Col></Row>
        <Row><Col>
      {aquarium!==null ?aquarium.map((uf, index) => (
                <Col><Button onClick={handleShow}>-</Button><Aquarium name={uf.name} id={uf.IDA}/></Col>
              )) : <h1>Loading...</h1>}
      </Col><Col></Col><Col>
      <Button onClick={()=>navigate("fishes")} >adicionar peixes +</Button>
      <Button onClick={()=>navigate("products")} >adicionar produtos +</Button>
      <Button onClick={()=>navigate("parameters")} >adicionar parametros +</Button></Col></Row>
      </Container>
      </div>
      </>
  )
}

export default AquariumInfo;