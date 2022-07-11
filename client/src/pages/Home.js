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
            <Card.Title><Image id='logoNav2' src={require('../img/23.png')} /></Card.Title>
                  <p className='textHome2'>Torna o teu gosto pelo aquarismo mais organizado.</p>  
            </Card.Body>
          </Card>
            <Image className='img2' src={require('../img/2.jpg')} />
            <Image  className='img3' src={require('../img/3.png')} />
        </CardGroup>
        <p></p>
        <CardGroup>
              <Image className='img4' src={require('../img/24.jpg')} />
          <Card border='0'>
              <Card.Body  className='cardHome2'>
              <Card.Title><p className='textHome3'>Ciclo de Nitrogénio</p></Card.Title>
                    <p className='textHome4'>O ciclo do nitrogénio é uma cadeia de reações biológicas que produzem resultados químicos. Começa quando a decomposição dos alimentos e os resíduos dos peixes produzem amónia. </p> 
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
                    <p className='textHome4'>A manutenção regular e as mudanças da água são inevitáveis para manter um aquário e os seus habitantes saudáveis. </p> 
                    <button class="botao1" onClick={ () => {
                    navigate('/water');
                }}>saber mais</button>
              </Card.Body>
            </Card>
              <Image className='img4' src={require('../img/25.jpg')} />
        </CardGroup>
        <p></p>
        <CardGroup>
              <Image className='img4' src={require('../img/26.jpg')} />
          <Card border='0'>
              <Card.Body  className='cardHome2'>
              <Card.Title><p className='textHome3'>Doenças e tratamentos</p></Card.Title>
                    <p className='textHome4'>Existem centenas de infeções bacterianas, parasitárias e fúngicas que podem afetar a saúde e o bem-estar dos seus peixes. Os peixes são animais altamente sensíveis, e as mudanças ambientais, por menores que sejam, podem desencadear períodos de stress e doenças.</p> 
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