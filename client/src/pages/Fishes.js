import React,{useState,useEffect} from 'react'
import{useNavigate,useParams} from "react-router-dom";
import { Card, Button, Form, Modal,Container,Row,Col } from 'react-bootstrap';
import Fish from '../components/fish';
import  Axios  from 'axios';
import NavBarOn from '../components/navBarOn';
import Footer from '../components/footer';

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
                required
                value={fishnameReg}
                onChange={(e)=> {
                    setFishnameReg(e.target.value)
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control
                type="number"
                autoFocus
                required
                value={fishQuantReg}
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
                required
                file={fishImg}
                onChange={ (e)=> setFishImg(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={fishnameReg === "" || fishQuantReg === "" || fishImg === null} variant="primary" onClick={fishes}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>


    <div>
      
      <NavBarOn/>
       
        <Row  id="cardParameters2">
            <Card id="cardFish">
              <Card.Title>
                <div className='textFish'>Peixes</div> <button className='botao2' id="botaoFish" onClick={handleShow}>Adicionar Peixes +</button>
              </Card.Title>
            </Card>
        </Row>

        <Row md={4}>
      {aquaFishes.length>0 ?aquaFishes.map((uf, index) => (        
                <Col id="containerFish">
                  <Fish idf={uf.IDF} name={uf.species} quantityF={uf.quantityF} />
                </Col>
              )) : (<h1 className='textLoad'>Sem Peixes :(</h1>)}
        </Row>

      
      </div>
      </>
  )
}

export default Fishes;