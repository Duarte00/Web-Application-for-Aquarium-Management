import React from 'react'
import { ListGroupItem } from 'react-bootstrap';

function Alert(props) {
  return (
    <ListGroupItem>
      <p>{props.typeA}</p>
      <p>{props.name}</p>
      <p>{props.date.split("T")[0].split("-")[2]+"-"+props.date.split("T")[0].split("-")[1]
      +"-"+props.date.split("T")[0].split("-")[0]+" "
      + props.date.split("T")[1].split("Z")[0].split(".")[0]}</p>
    </ListGroupItem>
  )
}

export default Alert;