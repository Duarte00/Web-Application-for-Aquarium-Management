import React from 'react'
import '../App.css';
import{useNavigate} from "react-router-dom";
import { Image, Row, Card, CardGroup} from 'react-bootstrap';

import NavBarOn from '../components/navBarOn';
import Footer from '../components/footer';

function Cycle() {
  let navigate = useNavigate();

  return (
    <div>
      <NavBarOn/>
        <Row> 
        <CardGroup>
          <Card border='0'>
            <Card.Body  className='cardCycle1'>
            <Card.Title><p className='textCycle1'>Ciclo de Nitrogenio</p></Card.Title>
                  <p className='textCycle2'>Primeiro aquário de peixes? 
                  Então já deves ter ouvido falar de algo chamado "ciclo de nitrogénio", 
                  seguido de um monte de termos científicos complicados que parecem intimidar muita gente. 
                  Vamos lá então ver o que é o ciclo de nitrogénio.</p>  
            </Card.Body>
            <Image  className='img6' src={require('../img/6.jpg')} />
            <div className='textCycle3'>Passo 1: Sempre que o seu peixe vai à casa de banho, é produzido alguma amónia.</div>
            <Image  className='img6' id='img7' src={require('../img/7.png')} />
            <div className='textCycle3'>Passo 2: As bactérias benéficas #1 comem o amoníaco e produzem nitritos.</div>
            <Image  className='img6' id='img7' src={require('../img/8.png')} />
            <div className='textCycle3'>Passo 3: As bactérias benéficas #2, comem os nitritos e 
            produzem nitratos (composto de nitrogénio menos tóxico).</div>
            <Image  className='img6' id='img7' src={require('../img/9.png')} />
            <div className='textCycle3'>Passo 4: Os peixes continuam a comer alimentos e 
            a produzir resíduos, que são transformados a partir de amónia e nitritos em mais nitratos.</div>
            <Image  className='img6' id='img7' src={require('../img/10.png')} />
            <div className='textCycle3'>Passo 5: Eventualmente, a quantidade de nitratos irá acumular-se e 
            pode tornar-se prejudicial para os peixes em grandes quantidades. Deve-se remover os nitratos, 
            quer fazendo uma mudança de água, quer utilizando plantas de aquário. 
            (As plantas de aquário consomem os nitratos para produzir novas folhas).</div>
            <Image  className='img6' id='img7' src={require('../img/11.png')} />
            <h3 className='textCycle3' id='textCycle4'>Quanto tempo leva para um aquário fazer o ciclo de nitrogénio?</h3>
            <div className='textCycle3'>Depende, mas normalmente pode demorar de algumas semanas a meses. Pode-se acelerar 
            este processo comprando bactérias nitrificantes vivas, ou cultivando plantas vivas (que também vêm com bactérias benéficas nelas).
            <br></br>
            Quantas bactérias benéficas tem o aquário, e será suficiente para tratar os resíduos produzidos pelos peixes?
            Por exemplo, se tiver um aquário "ciclado" com 3 néon tetras e de repente acrescentar 200 néon tetras, 
            esse aquário já não tem bactérias benéficas suficientes para converter imediatamente todos esses resíduos em nitratos seguro
            </div>
            <h3 className='textCycle3' id='textCycle4'>Como aumentar a minha filtragem biológica?</h3>
            <div className='textCycle3'>Isto leva-nos naturalmente a perguntar como podemos garantir que existe filtragem biológica 
            suficiente no aquário para lidar com compostos tóxicos de nitrogénio. Uma maneira fácil é, naturalmente, adicionar 
            mais plantas no aquário, que consumirão a amónia e os nitratos produzidos pelos resíduos dos  peixes. Basta lembrar 
            que se não existirem resíduos  suficientes para alimentar as plantas, estas podem morrer à fome, pelo que 
            será necessário a utilização de um suplemento com um bom fertilizante.
            <br></br>
            Quanto ao crescimento de bactérias benéficas, existe um equívoco comum de que a compra de filtros maiores aumentará 
            a quantidade de bactérias no aquário. A verdade é que as bactérias benéficas crescem não só nos filtros mas 
            também em todas as superfícies do aquário, tais como o cascalho, paredes de vidro e decorações. Comprar mais filtragem, 
            significa simplesmente que tem se tem maior capacidade de conter mais bactérias benéficas, mas se o aquário tiver apenas 
            alguns peixes, só a decoração pode ter superfície suficiente para colonizar as bactérias benéficas necessárias.
            </div>
          </Card>
        </CardGroup>
        <p></p>
        </Row>
      <Footer/>
    </div>
  )
}

export default Cycle