import React from 'react'
import '../App.css';
import{useNavigate} from "react-router-dom";
import { Image, Row, Card, CardGroup} from 'react-bootstrap';

import NavBarOn from '../components/navBarOn';
import Footer from '../components/footer';

function Water() {
  let navigate = useNavigate();

  return (
    <div>
      <NavBarOn/>
        <Row> 
        <CardGroup>
          <Card border='0'>
            <Card.Body  className='cardCycle1'>
            <Card.Title><p className='textCycle1'>Trocas de água</p></Card.Title>
                  <p className='textCycle2'>Mudar regularmente a água dos seus peixes é importante porque mesmo que a 
                  água do seu aquário pareça límpida, partículas de comida e resíduos ainda estão presentes. 
                  Isto não só causa uma acumulação física, como também os resíduos se convertem em produtos químicos, 
                  tais como nitrato, nitrito e amónia.</p>  
            </Card.Body>
            <h3 className='textCycle3' id='textCycle4'>Passos para mudar a água do aquário</h3>
            <div className='textCycle3'>Os aquários de água doce são muito mais fáceis de manter do que os de água salgada. 
            De facto, não é aconselhado a limpeza completa  da água do seu tanque de água doce, porque pode chocar o sistema dos peixes.
            <br></br>
            Aconselha-se a manter os peixes dentro do aquário. Removê-los causa stress desnecessário para os seus peixes, ocorrendo 
            o risco de os magoar acidentalmente. É possível manter os peixes no aquário enquanto o limpa, porque não precisa de remover toda
             a água para limpar devidamente o aquário.
             <br></br>
             Substituir completamente a água do aquário é uma má ideia porque removerá as bactérias benéficas que vivem no aquário e reiniciará o ciclo de nitrogénio, o que poderia matar os peixes. Se limpar regularmente o seu aquário, fazer uma mudança parcial de água é a melhor opção. 
             <br></br>
             Para evitar mudar completamente a água, pode fazê-lo 10%-15% de cada vez para permitir a introdução de água nova ao longo do tempo.
             <br></br>
             <br></br>
             <div className=''>Aqui estão algumas dicas para manter o seu tanque de água doce: </div>
             <ul className='textDisease2'>
              <li>Para um tanque mais pequeno, troque 10%-15% da água todas as semanas.</li>
              <li>Para um aquário maior, troque 20% da água cada semana.</li>
              <li>Se utilizar água da torneira, deixá-la repousar durante três dias.</li>
              <li>Teste diariamente a qualidade da água para assegurar níveis dos parâmetros.</li>
            </ul>

            <br></br>
            <div className='textDisease'> Desligue os equipamentos!</div> 
            <div className='textDisease2'>       Não danifique o seu filtro ou outros sistemas, deixando-os ligados enquanto muda a água.
            </div>

            <br></br>
            <div className='textDisease'>Limpar o interior do vidro.</div> 
            <div className='textDisease2'> Use uma esponja para remover suavemente qualquer acumulação no vidro dentro do aquário. Complete este passo antes de substituir a água.</div>
            
            
            <br></br>
            <div className='textDisease'>Preparar os baldes.</div> 
            <div className='textDisease2'> Vai precisar de um balde  para esvaziar a água existente no aquário. 
            Certifique-se de que não retira mais água do que a que pode voltar a colocar.
            </div>

            <br></br>
            <div className='textDisease'>Remova os detritos.</div> 
            <div className='textDisease2'> Trabalhe metodicamente usando um sifão de areia ou cascalho, removendo os detritos do fundo do seu aquário de peixes. À medida que trabalha para remover a acumulação, a água tornar-se-á mais clara. Trabalhe lentamente para não danificar os seus peixes no processo.
            </div>

            <br></br>
            <div className='textDisease'>Enche o aquário.</div> 
            <div className='textDisease2'> Adicione lentamente a quantidade de água que retirou durante a limpeza. Teste a água para assegurar que atinge os parâmetros corretos. Ligue o seu filtro à tomada para remover quaisquer restos de detritos que flutuem à volta.
            </div>
            
            
            </div>
          </Card>
        </CardGroup>
        <p></p>
        </Row>
      <Footer/>
    </div>
  )
}

export default Water