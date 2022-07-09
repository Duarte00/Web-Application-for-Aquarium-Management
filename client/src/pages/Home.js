import React from 'react'
import '../App.css';
import{useNavigate} from "react-router-dom";
import {Image, Row, Card, CardGroup} from 'react-bootstrap';

import NavBarOn from '../components/navBarOn';
import Footer from '../components/footer';

function Home() {
  let navigate = useNavigate();

  return (
    <div>
      <NavBarOn/>
        <Row> 
        <CardGroup>
          <Card border='0'>
            <Card.Body  className='cardHome1'>
            <Card.Title><p className='textHome1'>Fish2o</p></Card.Title>
                  <p className='textHome2'>Torna o teu gosto pelo aquarismo maisn organizado.</p>  
            </Card.Body>
          </Card>
            <Image className='img2' src={require('../img/2.jpg')} />
            <Image  className='img3' src={require('../img/3.png')} />
        </CardGroup>
        <p></p>
        <CardGroup>
              <Image className='img2' src={require('../img/4.jpg')} />
          <Card border='0'>
              <Card.Body  className='cardHome2'>
              <Card.Title><p className='textHome3'>Ciclo de Nitrogénio</p></Card.Title>
                    <p className='textHome4'>texto nitrogenio</p> 
                    <button class="botao1" onClick={ () => {
                    navigate('/cycle');
                }}>saber mais</button>
              </Card.Body>
            </Card>
        </CardGroup>
        <p></p>
        <CardGroup>
        <Card border='0'>
              <Card.Body  className='cardHome2'>
              <Card.Title><p className='textHome3'>Trocas de água e a quimica do aquário</p></Card.Title>
                    <p className='textHome4'>texto trocas de água</p> 
                    <button class="botao1" onClick={ () => {
                    navigate('/water');
                }}>saber mais</button>
              </Card.Body>
            </Card>
              <Image className='img2' src={require('../img/4.jpg')} />
        </CardGroup>
        <p></p>
        <CardGroup>
              <Image className='img2' src={require('../img/4.jpg')} />
          <Card border='0'>
              <Card.Body  className='cardHome2'>
              <Card.Title><p className='textHome3'>Doenças e tratamentos</p></Card.Title>
                    <p className='textHome4'>texto doenças</p> 
                    <button class="botao1" onClick={ () => {
                    navigate('/diseases');
                }}>saber mais</button>
              </Card.Body>
            </Card>
        </CardGroup>
        </Row>
      <Footer/>
    </div>
  )
}

export default Home