import React,{useState,useEffect} from 'react'
import{useNavigate} from "react-router-dom";
import { Navbar, Button, Form, Modal,Container,Row,Col } from 'react-bootstrap';
import Axios from 'axios';
import Aquarium from '../components/aquarium';

function Profile() {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [aquariumnameReg, setAquariumnameReg] = useState('')
  const [dimensionReg, setdimensiondReg] = useState('')
  const [aquariumImg, setAquariumImg] = useState(null);

  const [userAquariums,setUserAquariums] =useState([]);


  const getUserAquariums=()=>{
    Axios.get('http://localhost:3001/userAquariums',{
  withCredentials: true,
  baseURL: "http://localhost:3001/",
}).then((res) => {
      setUserAquariums(res.data);
      console.log(res.data)
    })
  }
  
  const aquarium = () => {
    const formData = new FormData();
      formData.append("name",  aquariumnameReg);
      formData.append("dimension",dimensionReg);
      formData.append("uploaded_file",aquariumImg);
    Axios.post('http://localhost:3001/profile', formData,{
      withCredentials: true,
      baseURL: "http://localhost:3001/",
    }).then((respose) => {
      console.log(respose);
      handleClose();
    })
  }


  useEffect(()=>{
    getUserAquariums();
  },[])
  return (
<>
< Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Aquário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="name"
                autoFocus 
                onChange={(e)=> {
                setAquariumnameReg(e.target.value)
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Dimensão</Form.Label>
              <Form.Control
                type="numerical"
                autoFocus
                onChange={(e)=> {
                  setdimensiondReg(e.target.value)
                  }}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose File</Form.Label>
              <Form.Control
                type="file"
                name="uploaded_file"
                onChange={ (e)=> setAquariumImg(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={aquarium}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

    <div>
      
  
      
      
      </div>
      <Row><Col><Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Fish20</Navbar.Brand>
          <button  className="buttonNavBar" onClick={ () => {
                    navigate('/login');
                }}>
                    Login</button>
        </Container>
      </Navbar></Col></Row>
      
      <Container>
        
        <Row>
        <Col><button className='button-24' onClick={handleShow}>+</button></Col>
        {userAquariums.length>0  ? (
              userAquariums.map((uf, index) => (
                <Col><Aquarium name={uf.name} id={uf.IDA}/></Col>
              ))
            ) : (
              <h1>No Aquariums</h1>
      )}
        </Row>
      </Container>


      
      
    
    </>
  )
}

export default Profile;