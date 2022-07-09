import React from 'react'
import { ListGroupItem,Card } from 'react-bootstrap';

let dict= {
  Ph: "Ph fora dos parâmetros, ver página informativa",
  Nitrato : "Níveis de nitratos elevados, realizar mudança de água assim que possivél",
  Nitrito : "Níveis de nitrito elevadoS, ver página informativa",
  Cloro : "Níveis de cloro elevadoS, ver página informativa",
  Amónia : "Níveis de amónia elevadoS, ver página informativa",
  GH : "Gh fora dos parâmetros, ver página informativa",
  KH : "Kh fora dos parâmetros, ver página informativa",
  Temperatura : "Temperatura fora dos parâmetros, ver página informativa"
}

function Alert(props) {
  return (

          <Card border='0' id="cardAlert">
            <Card.Title >
              <div className='textAlert1'>Aquario: {props.name+ " "}</div>
              <div className='textAlert3'>Data: {props.date.split("T")[0].split("-")[2]+"-"+props.date.split("T")[0].split("-")[1]
              +"-"+props.date.split("T")[0].split("-")[0]+" "
              + props.date.split("T")[1].split("Z")[0].split(".")[0]}</div> 
              <div className='textAlert2' ><p>Alerta: {dict[props.typeA]}</p></div>
              </Card.Title>
          </Card>
      
  )
}

export default Alert;