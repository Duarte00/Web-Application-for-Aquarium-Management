import React from 'react'
import '../App.css';
import{useNavigate} from "react-router-dom";
import { Image, Row, Card, CardGroup} from 'react-bootstrap';

import NavBarOn from '../components/navBarOn';
import Footer from '../components/footer';

function Diseases() {
  let navigate = useNavigate();

  return (
    <div>
      <NavBarOn/>
        <Row> 
        <CardGroup>
          <Card border='0'>
            <Card.Body  className='cardCycle1'>
            <Card.Title><p className='textCycle1'>Doenças e tratamentos</p></Card.Title>
                  <p className='textCycle2'>Há muitas doenças que podem afectar os peixes 
                  de água doce. Os peixes correm maior risco de doença quando têm o sistema 
                  imunitária comprometido ou estão sobre stress crónico devido à má qualidade 
                  da água, sobrelotação, dietas inadequadas e outras preocupações ambientais 
                  deficientes. Estas questões precisam de ser abordadas ou quaisquer tratamentos 
                  terão apenas um efeito temporário.</p>  
            </Card.Body>
            <div className='textDisease'>Vermes-âncora</div>
            <div className='textDisease3'>Sintomas Físicos:</div>
            <ul className='textDisease2'>
              <li>Raspagem contra objetos pelos peixes afetados</li>
              <li>Protuberância de fios esbranquiçados no corpo do peixe</li>
              <li>Os pontos de fixação dos fios esbranquiçados são marcados por inflamação</li>
            </ul>
            <div><Image  className='img7' src={require('../img/12.jpg')} /></div>
            <div className='textDisease3'>Causa:</div>
            <div className='textDisease2'>Introduzidos em aquários por peixes contaminados, 
            os jovens vermes-âncora são pequenos crustáceos que se enterram na pele do peixe 
            e entram nos músculos. Aqui começam a desenvolver-se e a libertar ovos antes de morrerem.</div>
            <div className='textDisease3'>Tratamento:</div>
            <div className='textDisease2'>Métodos comuns incluem a remoção física do parasita e 
            a limpeza da ferida com um antisséptico como o iodo. Também é comum por os peixes em 
            água salgada (35ppt) durante cerca de 5 minutos durante vários dias até o parasita cair.</div>

            <div className='textDisease'>Vermes</div>
            <div className='textDisease3'>Sintomas Físicos:</div>
            <ul className='textDisease2'>
              <li>Raspagem contra objetos pelos peixes afetados</li>
              <li>Camada de muco que cobre as guelras ou o corpo</li>
              <li>Guelras em movimento rápido</li>
              <li>Pele avermelhada</li>
            </ul>
            <div><Image  className='img7' src={require('../img/13.png')} /></div>
            <div className='textDisease3'>Causa:</div>
            <div className='textDisease2'>Condições ambientais indesejáveis - incluindo má qualidade da água, 
            sobrelotação e/ou stress por espécies incompatíveis - criam condições que podem levar a surtos destrutivos. 
            As doenças estão frequentemente presentes nos aquários, mas permanecem inofensivas em condições ideais. 
            Evitar condições estressantes é uma chave para a prevenção, mas uma vez que um surto ocorre, o tratamento 
            imediato é crítico.</div>
            <div className='textDisease3'>Tratamento:</div>
            <div className='textDisease2'>O Tetra Parasite Guard® com Praziquantel é eficaz mas deve ser cuidadosamente 
            administrado. Um comprimido por cada 10 galões. Remover o carvão activo e repetir após 48 horas; realizar uma 
            mudança parcial de água entre tratamentos. As infeções secundárias também são comuns e podem ser tratadas 
            com antibióticos ou curas gerais como Lifeguard® ou Fungus Guard®.</div>

            <div className='textDisease'>Barbatana presa</div>
            <div className='textDisease3'>Sintomas Físicos:</div>
            <ul className='textDisease2'>
              <li>As barbatanas são dobradas contra o corpo e não "fechadas"</li>
              <li>Comportamento estranho</li>
            </ul>
            <div><Image  className='img7' src={require('../img/14.PNG')} /></div>
            <div className='textDisease3'>Causa:</div>
            <div className='textDisease2'>Não é indicativo de uma doença específica. Pode ser um reflexo de vários problemas, 
            incluindo a má qualidade da água e/ou parasitas. Importante determinar primeiro o problema específico, a fim de 
            tratar os peixes adequadamente</div>
            <div className='textDisease3'>Tratamento:</div>
            <div className='textDisease2'>Se a doença resultar de infecções, um antibiótico polivalente como o Tetra Lifeguard® 
            é a primeira linha de tratamento. Uma boa prática de adicionar 1 colher de chá, de sal de aquário por galão 
            para ajudar a evitar a barbatana presa.</div>

            <div className='textDisease'>Dropsy</div>
            <div className='textDisease3'>Sintomas Físicos:</div>
            <ul className='textDisease2'>
              <li>Acumulação de ar que aumenta a barriga do peixe e dificulta o seu nadar</li>
              <li>Escamas salientes</li>
            </ul>
            <div><Image  className='img7' src={require('../img/15.PNG')} /></div>
            <div className='textDisease3'>Causa:</div>
            <div className='textDisease2'>Uma infeção bacteriana dos rins, que provoca a acumulação de fluidos ou 
            insuficiência renal. Parece criar problemas apenas em peixes enfraquecidos. Pode ter origem em condições 
            de aquariofilia desorganizadas.</div>
            <div className='textDisease3'>Tratamento:</div>
            <div className='textDisease2'>Remover o carbono do filtro e desligar o esterilizador UV. 
              Adicionar um comprimido por dia a cada 5 galões de água. Tratar durante 5 dias consecutivos. Repetir até 
              os sintomas desaparecerem. Os tratamentos externos são desafiantes; cuidados preventivos com mudanças
              regulares de água, mantendo a química ideal do aquário e adicionando sal de aquário é altamente recomendado.
                As injecções ou rações antibióticas são mais eficazes, mas alguns antibióticos de largo espectro podem ajudar, 
                como o Tetra Fungus Guard®.
            </div>

              <div className='textDisease'>Ick</div>
            <div className='textDisease3'>Sintomas Físicos:</div>
            <ul className='textDisease2'>
              <li>Pontos brancos que se assemelham a areia branca sobre a pele</li>
              <li>Arranhar contra objetos devido a pele irritada</li>
              <li>Barbatanas presas</li>
              <li>Apanhar ar na superfície da água</li>
            </ul>
            <div><Image  className='img7' src={require('../img/16.jpg')} /></div>
            <div className='textDisease3'>Causa:</div>
            <div className='textDisease2'>Normalmente ataca peixes que se encontram em stress, o que pode ser causado por fatores que incluem flutuações rápidas de temperatura e pH.</div>
            <div className='textDisease3'>Tratamento:</div>
            <div className='textDisease2'>Remover o carbono do filtro e desligar o esterilizador UV. Adicionar um comprimido por dia a cada 5 galões de água. Tratar durante 5 dias consecutivos. Repetir até os sintomas desaparecerem. As infeções secundárias também são comuns e podem ser tratadas com antibióticos ou curas gerais como Tetra Ick® Guard® ou Tetra® Fungus Guard®. Uma temperatura consistente e uma boa qualidade da água ajudarão a prevenir infeções, para além de utilizar sal de aquário..</div>   
          
            <div className='textDisease'>Fungos</div>
            <div className='textDisease3'>Sintomas Físicos:</div>
            <ul className='textDisease2'>
              <li>Inicialmente, notará um crescimento cinzento ou esbranquiçado na e sobre a escamas e/ou barbatanas</li>
              <li>O fungo não tratado assemelha-se a crescimento de algodão</li>
              <li>Eventualmente, como o fungo continua a comer o corpo do peixe, o peixe morrerá</li>
            </ul>
            <div><Image  className='img7' src={require('../img/17.jpg')} /></div>
            <div className='textDisease3'>Causa:</div>
            <div className='textDisease2'>Os peixes que desenvolvem fungos já se encontram num estado vulnerável, resultado de outros graves problemas de saúde ou ataques, tais como parasitas, uma lesão física ou uma infeção bacteriana.</div>
            <div className='textDisease3'>Tratamento:</div>
            <div className='textDisease2'>Remover o carbono do filtro e desligar o esterilizador UV. Adicionar um comprimido por dia a cada 5 galões de água. Tratar durante 5 dias consecutivos. Repetir até os sintomas desaparecerem. Muitas infeções bacterianas são mal diagnosticadas como fúngicas, por isso os medicamentos comuns incluem tanto um fungicida como antibióticos. Tetra Fungus Guard® contém verde de malaquite e formalina; tratar um comprimido por cada 10 galões uma vez a cada 4 dias até que os sintomas desapareçam. Remover o carvão ativo e conduzir mudanças parciais de água entre os tratamentos.</div>
          
            <div className='textDisease'>Vermes nas guelras</div>
            <div className='textDisease3'>Sintomas Físicos:</div>
            <ul className='textDisease2'>
              <li>Guelras Infetadas </li>
              <li>Uma vez destruídas as guelras, o peixe morrerá</li>
            </ul>
            <div><Image  className='img7' src={require('../img/18.jpg')} /></div>
            <div className='textDisease3'>Causa:</div>
            <div className='textDisease2'>Condições ambientais indesejáveis - incluindo má qualidade da água, sobrelotação e/ou stress por espécies incompatíveis - criam condições que podem levar a surtos destrutivos. As correntes estão frequentemente presentes nos aquários, mas permanecem inofensivas em condições ideais. Evitar condições estressantes é uma chave para a prevenção, mas uma vez que um surto ocorre, o tratamento imediato é crítico.</div>
            <div className='textDisease3'>Tratamento:</div>
            <div className='textDisease2'>O Tetra Parasite Guard® com praziquantel é eficaz mas deve ser cuidadosamente administrado por direcção. Um comprimido por cada 10 galões. Remover o carvão activado e repetir após 48 horas; realizar uma mudança parcial de água entre tratamentos. As infecções secundárias também são comuns e podem ser tratadas com antibióticos ou curas gerais como Lifeguard® ou Fungus Guard®.
            </div>
          
            <div className='textDisease'>Ácaros das guelras</div>
            <div className='textDisease3'>Sintomas Físicos:</div>
            <ul className='textDisease2'>
              <li>Apanhar ar na superfície da água</li>
              <li>Coberturas de guelras parcialmente abertas</li>
            </ul>
            <div><Image  className='img7' src={require('../img/19.jpg')} /></div>
            <div className='textDisease3'>Causa:</div>
            <div className='textDisease2'>Os peixes que já estão infestados por ácaros das brânquias são trazidos para aquários. Os pequenos ácaros ficam nas guelras do peixe, e atacam o peixe alimentando-se de sangue e carne viva.</div>
            <div className='textDisease3'>Tratamento:</div>
            <div className='textDisease2'>Remover o carbono do filtro e desligar o esterilizador UV. Adicionar um comprimido por dia a cada 5 galões de água. Tratar durante 5 dias consecutivos. Repetir até os sintomas desaparecerem. O Tetra Parasite Guard® com praziquantel é eficaz mas deve ser cuidadosamente administrado por direcção. Um comprimido por cada 10 galões. Remover o carvão activado e repetir após 48 horas; realizar uma mudança parcial de água entre tratamentos. As infecções secundárias também são comuns e podem ser tratadas com antibióticos ou curas gerais como o Tetra Fungus Guard®.
            </div>
          
            <div className='textDisease'>Sépticemia hemorrágica</div>
            <div className='textDisease3'>Sintomas Físicos:</div>
            <ul className='textDisease2'>
              <li>Podem ocorrer vários sintomas diferentes, embora alguns peixes não apresentem sintomas externos</li>
              <li>Hemorragia dos órgãos internos, escamas e músculo</li>
              <li>Olhos salientes</li>
              <li>Abdómens inchados</li>
              <li>Feridas abertas</li>
              <li>Comportamento anormal</li>
            </ul>
            <div><Image  className='img7' src={require('../img/20.jpg')} /></div>
            <div className='textDisease3'>Causa:</div>
            <div className='textDisease2'>A infeção  é trazida para aquários por peixes já infetados com um vírus mortal chamado vírus da septicemia hemorrágica viral (VHSV ou VHSv).</div>
            <div className='textDisease3'>Tratamento:</div>
            <div className='textDisease2'>Não há cura conhecida para este vírus. Por vezes, o tratamento de infecções secundárias com antibióticos de largo espectro ou tratamentos de uso geral como o Tetra Lifeguard® irá reduzir a mortalidade. Adicionar um comprimido Lifeguard a cada 5 galões e tratar 5 dias consecutivos. Remover o carvão activado e conduzir uma mudança parcial de água entre os tratamentos.
            </div>
          
            <div className='textDisease'>Piolhos</div>
            <div className='textDisease3'>Sintomas Físicos:</div>
            <ul className='textDisease2'>
              <li>Peixes inquietos</li>
              <li>Normalmente os peixes esfregam-se contra o vidro do aquário ou outros objetos, num esforço para remover piolhos</li>
              <li>Outros sinais indicadores: Os piolhos têm oito patas - e assemelham-se a pequenos caranguejos pálidos. Aparecem como pontos ovais planos e escuros, rastejando sobre os peixes.</li>
              <li>Os piolhos utilizam ventosas para se prenderem aos peixes. Depois perfuram a pele e alimentam-se do hospedeiro</li>
            </ul>
            <div><Image  className='img7' src={require('../img/21.PNG')} /></div>
            <div className='textDisease3'>Causa:</div>
            <div className='textDisease2'>Normalmente de peixes que viviam num lago ao ar livre de uma vez e que os levavam para um aquário interior. Também podem ser introduzidos piolhos de peixes selvagens que são adicionados a um aquário. Os piolhos viajam de um peixe hospedeiro para outro, espalhando bactérias e vírus, por isso, uma vez no seu aquário, deve livrar-se deles.</div>
            <div className='textDisease3'>Tratamento:</div>
            <div className='textDisease2'>Os métodos comuns incluem a remoção física do parasita e a limpeza da ferida com um antisséptico como o iodo, bem como o banho de peixes de água doce num banho de água do mar (35ppt) durante cerca de 5 minutos durante vários dias até o parasita cair, ou a utilização de um banho de formol.
            </div>
          
            <div className='textDisease'>Podridão da boca, cauda ou barbatana</div>
            <div className='textDisease3'>Sintomas Físicos:</div>
            <ul className='textDisease2'>
              <li>Uma deterioração progressiva da cauda e/ou barbatanas</li>
              <li>As barbatanas tornam-se desfiadas e a sua cor pode desvanecer</li>
            </ul>
            <div><Image  className='img7' src={require('../img/22.jpg')} /></div>
            <div className='textDisease3'>Causa:</div>
            <div className='textDisease2'>Uma infeção bacteriana pode causar apodrecimento da cauda, barbatana e boca em peixes suscetíveis - aqueles que são intimidados ou feridos por companheiros de aquários com barbatanas - especialmente em aquários com más condições.</div>
            <div className='textDisease3'>Tratamento:</div>
            <div className='textDisease2'>Remover o carbono do filtro e desligar o esterilizador UV. Adicionar um comprimido por dia a cada 5 galões de água. Tratar durante 5 dias consecutivos. Repetir até os sintomas desaparecerem. Se as barbatanas presas forem o resultado de infeções, um tratamento multiusos como o Tetra Fungus Guard® é a primeira linha de tratamento. A boa prática de adicionar 1 colher de chá, de sal de aquário por galão ajudará a prevenir as barbatanas presas.
            </div>
          </Card>
        </CardGroup>
        <p></p>
        </Row>
      <Footer/>
    </div>
  )
}

export default Diseases