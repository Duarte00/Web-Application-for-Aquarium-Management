import Axios from 'axios';
import React,{useState,useEffect} from 'react'
import{useNavigate} from "react-router-dom";
import { Navbar,ListGroupItem ,Button, Form, Modal,Container,Row,Col, ListGroup} from 'react-bootstrap';
import Alert from '../components/alert';

function Alerts() {

    let navigate = useNavigate();
    const [aquaAlerts,setAquaAlerts] =useState([]);
    
    const getAlerts=()=>{
        Axios.get('http://localhost:3001/alerts',{
      withCredentials: true,
      baseURL: "http://localhost:3001/",
    }).then((res) => {
        setAquaAlerts(res.data);
          console.log(res.data)
        })
      }

      useEffect(()=>{
        getAlerts();
    },[])
      

    return ( 
        <div>
        <Container>
        <Row><Col><Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Fish20</Navbar.Brand>
        <button  className='buttonAlerts' onClick={()=>navigate("/AquariumInfo/alerts")}>
          <img src="img/1.png"></img>
        </button>
          <button  className="buttonNavBar" onClick={ () => {
                    navigate('/login');
                }}>
                    Login</button>
        </Container>
      </Navbar></Col></Row>
    </Container>

    <Row>
        <Col>
        {aquaAlerts.length>0 ?aquaAlerts.map((uf, index) => (
            <ListGroup>
                <Alert name={uf.name} date={uf.dateA} typeA={uf.typeA}/>
            </ListGroup>
            )) : (<h1>Loading...</h1>)}
        </Col>
        <Col>
        </Col>
    </Row>
    </div>
    )

}

export default Alerts