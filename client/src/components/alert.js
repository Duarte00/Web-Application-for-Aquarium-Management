import React from 'react'
import { ListGroupItem } from 'react-bootstrap';

let dict= {
  Ph: "Ph fora dos parâmetros, ver página informativa",
  Nitrato : "Níveis de nitratos elevados, realizar mudança de água assim que possivél",
  Nitrito : "Níveis de Nitrito elevadoS, ver página informativa",
  Cloro : "Níveis de cloro elevadoS, ver página informativa",
  Amónia : "Níveis de amónia elevadoS, ver página informativa",
  GH : "Gh fora dos parâmetros, ver página informativa",
  KH : "Kh fora dos parâmetros, ver página informativa",
}

function Alert(props) {
  return (
    <ListGroupItem>
      <a>{props.name+ " "}</a>
      {props.date.split("T")[0].split("-")[2]+"-"+props.date.split("T")[0].split("-")[1]
      +"-"+props.date.split("T")[0].split("-")[0]+" "
      + props.date.split("T")[1].split("Z")[0].split(".")[0]}
      <p>{dict[props.typeA]}</p>
    </ListGroupItem>
  )
}

export default Alert;