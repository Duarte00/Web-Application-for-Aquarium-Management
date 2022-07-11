import Axios from 'axios';
import React,{useState,useEffect} from 'react'
import{useNavigate} from "react-router-dom";
import { Card,Row,Col, ListGroup} from 'react-bootstrap';
import Alert from '../components/alert';
import NavBarOn from '../components/navBarOn';
import Footer from '../components/footer';

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
      <NavBarOn/>

        <Row>
          
            <Card >
              <Card.Title>
                <div  className="textAlert4">Alertas</div> <button onClick={ () => {
                    navigate('/');}} className='botao2' id="botaoAlert">Resolver alerta +</button>
              </Card.Title>
            </Card>
          
          <ListGroup id="cardParameters">
          {aquaAlerts.length>0 ?aquaAlerts.map((uf, index) => (
              <Col id="cardParameters2"> 
                  <Alert name={uf.name} date={uf.dateA} typeA={uf.typeA}/>
              </Col>
              )) : (<h1 className='textLoad'>Sem Alertas :)</h1>)}
          </ListGroup> 
        </Row>
      <Footer/>
    </div>
    )

}

export default Alerts