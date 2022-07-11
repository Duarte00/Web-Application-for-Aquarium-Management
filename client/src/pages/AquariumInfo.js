import React,{useState,useEffect} from 'react'
import{useNavigate,useParams} from "react-router-dom";
import { Container,Row,Col, Card, Button, Modal } from 'react-bootstrap';
import Aquarium from '../components/aquarium';
import  Axios  from 'axios';
import NavBarOn from '../components/navBarOn';
import Footer from '../components/footer';

function AquariumInfo() {
  let navigate = useNavigate();
  const {ida} = useParams();
  const [show, setShow] = useState(false);
  const [aquarium,setAquarium] =useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [sumFishes,setsumFishes] =useState(0);
  const [sumAlerts,setsumAlerts] =useState(0);
  const [sumProducts,setsumProducts] =useState(0);
  
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

  const sumFish=()=>{
    Axios.get('http://localhost:3001/fishesSum?ida='+ida,{
  withCredentials: true,
  baseURL: "http://localhost:3001/",
  }).then((respose) => {
    setsumFishes(respose.data.fishTotal);
  })
  }

  const sumAlert=()=>{
    Axios.get('http://localhost:3001/alertSum?ida='+ida,{
  withCredentials: true,
  baseURL: "http://localhost:3001/",
  }).then((respose) => {
    setsumAlerts(respose.data.alertTotal);
  })
  }

  const sumProduct=()=>{
    Axios.get('http://localhost:3001/productSum?ida='+ida,{
  withCredentials: true,
  baseURL: "http://localhost:3001/",
  }).then((respose) => {
    setsumProducts(respose.data.productTotal);
  })
  }



  useEffect(()=>{
    getAquarium();
    sumFish();
    sumAlert();
    sumProduct();
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
    <NavBarOn/>
      <Row>

          <Col  className='col-5'>
                {aquarium!==null ?aquarium.map((uf, index) => (
                <Col className='conatinerAquaInfo1'><button className='botao2' id="botao5" onClick={handleShow}>-</button>
                <Aquarium dimension={uf.dimension} name={uf.name} id={uf.IDA}/></Col>
              )) : <h1>Loading...</h1>}
          </Col>
      
        <Col>
          <Row>
              <Card  id='cardAquaInfo1'>
                <Card.Body  className=''>
                      <Card.Title><div className='cardAquaInfo2'>Peixes</div> <button className='botao2' id="botao3" 
                      onClick={()=>navigate("fishes")}>+</button> </Card.Title>
                      <div className='cardAquaInfo2' id="cardAquaInfo3">{sumFishes} peixes </div>
                  </Card.Body>
              </Card>

              <Card  id='cardAquaInfo1'>
                <Card.Body  className=''>
                      <Card.Title><div className='cardAquaInfo2'>Alertas</div> <button className='botao2' id="botao3" 
                      onClick={()=>navigate('/AquariumInfo/alerts/')}>+</button> </Card.Title>
                      <div className='cardAquaInfo2' id="cardAquaInfo3">{sumAlerts} alertas</div>
                  </Card.Body>
              </Card>
           </Row>
          
          <Row>
            
              <Card  id='cardAquaInfo1'>
                  <Card.Body  className=''>
                        <Card.Title><div className='cardAquaInfo2'>Produtos</div> <button className='botao2' id="botao3" 
                        onClick={()=>navigate("products")}>+</button> </Card.Title>
                        <div className='cardAquaInfo2' id="cardAquaInfo3">{sumProducts} produtos</div>
                    </Card.Body>
                </Card>
            

           
                  <Card  id='cardAquaInfo1'>
                      <Card.Body  className=''>
                            <Card.Title><div className='cardAquaInfo2' id='cardAquaInfo5'>Parâmetros </div> <button className='botao2' id="botao3" 
                            onClick={()=>navigate("parameters")}>+</button> </Card.Title>
                            <div className='cardAquaInfo2' id="cardAquaInfo3">8 parâmetros </div>
                        </Card.Body>
                    </Card>
            
          </Row>
        </Col>
      </Row>

      </div>
      </>
  )
}

export default AquariumInfo;