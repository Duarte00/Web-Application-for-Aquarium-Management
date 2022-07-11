import React,{useState,useEffect} from 'react'
import{useNavigate,useParams} from "react-router-dom";
import { Card, Button, Form, Modal,Row,Col, ListGroup, ListGroupItem, Placeholder } from 'react-bootstrap';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import  Axios  from 'axios';
import NavBarOn from '../components/navBarOn';
import Footer from '../components/footer';

function Parameters() {
    const handleClose = () => {setparamPos(0);setShow(false);}
    const handleShow = () => {setparamPos(0);setShow(true);console.log(paramPos)}
    const [show, setShow] = useState(false);
    let navigate = useNavigate();
    const {ida}=useParams();
    const [parameterReg, setparameterReg] = useState('')
    const [currentParameter, setcurrentParameter] = useState(0);
    const [paramPos, setparamPos] = useState(0);
    const [data,setData] = useState([]);

    const parameters = () =>{
        const formData = new FormData();
        formData.append("quantityP",  parameterReg);
        formData.append("IDA",ida);
        formData.append("nameP",paramPos);
        Axios.post('http://localhost:3001/parameters', {"quantityP":parameterReg,"IDA":ida,"nameP":paramPos},{
            withCredentials: true,
            baseURL: "http://localhost:3001/",
          }).then((respose) => {
            console.log(respose);
            handleClose();
          })
    }
    
    const changeParameter = (nr) =>{
      setcurrentParameter(nr);
      Axios.get('http://localhost:3001/aquariumParameter?ida='+ida+"&param="+nr,{
        withCredentials: true,
      }).then((res) => {
        setData(res.data)
          })
      }

      const minMaxes = [
        {
          min:6.8, 
          max:7.6,
          unit: ""
        },
        {
          min:0, 
          max:24,
          unit: "ppm"
        },
        {
           min:0, 
           max:0,
           unit: "ppm"
        },
        {
            min:0, 
            max:0,
            unit: "ppm"
         },
         {
            min:0, 
            max:0,
            unit: "ppm"
         },
         {
            min:70, 
            max:140,
            unit: "ppm"
         },
         {
            min:70, 
            max:140,
            unit: "ppm"
         },
         {
          min:23, 
          max:28,
          unit: "ºC"
        },
        ]



    return ( 
<>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar parâmetros </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Label>Selecionar parâmetros</Form.Label>
          <Form.Select onChange={(e)=>setparamPos(e.target.value)} aria-label="Default select example" >
            <option value="0">Ph</option>
            <option value="1">Nitrato</option>
            <option value="2">Nitrito</option>
            <option value="3">Cloro</option>
            <option value="4">Amónia</option>
            <option value="5">GH</option>
            <option value="6">KH</option>
            <option value="7">Temperatura</option>
          </Form.Select>  
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Novo valor a introduzir</Form.Label>
              <Form.Control
                type="number"
                autoFocus 
                required
                value={parameterReg}
                onChange={(e)=> {
                    setparameterReg(e.target.value)
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={parameterReg === ""} variant="primary" onClick={parameters}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

        <div>
        <NavBarOn/>
     
      <Row>
        <Col className='col-5' id="cardParameters2">
          <Card id="cardParameters1">
            <Card.Title>
              <div className='textParameters'>Parâmetros</div> <button className='botao2' id="botao4" onClick={handleShow}>Adicionar parâmetros +</button>
            </Card.Title>
          </Card>

            <ListGroup>

                <ListGroup.Item id="cardParameters3">
                  <Card.Title>
                    <Card border='0'>
                    <div className='textParameters1'>Ph</div> <button className='botao2' id="botaoParameters" onClick={()=>changeParameter(0)}>^</button>
                    </Card>
                    </Card.Title>
                </ListGroup.Item>

                <ListGroup.Item id="cardParameters3">
                  <Card.Title>
                    <Card border='0'>
                    <div className='textParameters1'>Nitrato</div> <button className='botao2' id="botaoParameters" onClick={()=>changeParameter(1)}>^</button>
                    </Card>
                    </Card.Title>
                </ListGroup.Item>

                <ListGroup.Item id="cardParameters3">
                  <Card.Title>
                    <Card border='0'>
                    <div className='textParameters1'>Nitrito</div> <button className='botao2' id="botaoParameters" onClick={()=>changeParameter(2)}>^</button>
                    </Card>
                    </Card.Title>
                </ListGroup.Item>

                <ListGroup.Item id="cardParameters3">
                  <Card.Title>
                    <Card border='0'>
                    <div className='textParameters1'>Cloro</div> <button className='botao2' id="botaoParameters" onClick={()=>changeParameter(3)}>^</button>
                    </Card>
                    </Card.Title>
                </ListGroup.Item>

                <ListGroup.Item id="cardParameters3">
                  <Card.Title>
                    <Card border='0'>
                    <div className='textParameters1'>Amónia</div> <button className='botao2' id="botaoParameters" onClick={()=>changeParameter(4)}>^</button>
                    </Card>
                    </Card.Title>
                </ListGroup.Item>

                <ListGroup.Item id="cardParameters3">
                  <Card.Title>
                    <Card border='0'>
                    <div className='textParameters1'>GH</div> <button className='botao2' id="botaoParameters" onClick={()=>changeParameter(5)}>^</button>
                    </Card>
                    </Card.Title>
                </ListGroup.Item>

                <ListGroup.Item id="cardParameters3">
                  <Card.Title>
                    <Card border='0'>
                    <div className='textParameters1'>KH</div> <button className='botao2' id="botaoParameters" onClick={()=>changeParameter(6)}>^</button>
                    </Card>
                    </Card.Title>
                </ListGroup.Item>

                <ListGroup.Item id="cardParameters3">
                  <Card.Title>
                    <Card border='0'>
                    <div className='textParameters1'>Temperatura</div> <button className='botao2' id="botaoParameters" onClick={()=>changeParameter(7)}>^</button>
                    </Card>
                    </Card.Title>
                </ListGroup.Item>
            </ListGroup>
        </Col>

        <Col>
          <AreaChart id="graphs"
            width={800}
            height={500}
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="datep" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="quantityP" stroke="#e20c0c" fill="rgb(108,212,202)" />
          </AreaChart>
          <div className='Min'>min {minMaxes[currentParameter].min + " " + minMaxes[currentParameter].unit}</div>
          <div className='Max'>max {minMaxes[currentParameter].max + " " + minMaxes[currentParameter].unit}</div>
        </Col>
      </Row>
      <Footer/>
        </div>
        </>
    )
}

export default Parameters