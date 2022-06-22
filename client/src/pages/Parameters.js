import React,{useState,useEffect} from 'react'
import{useNavigate,useParams} from "react-router-dom";
import { Navbar, Button, Form, Modal,Container,Row,Col, ListGroup, ListGroupItem, Placeholder } from 'react-bootstrap';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import  Axios  from 'axios';

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
        ]



    return ( 
<>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Peixe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Label>Selecionar parametro</Form.Label>
          <Form.Select onChange={(e)=>setparamPos(e.target.value)} aria-label="Default select example" >
            <option value="0">Ph</option>
            <option value="1">Nitrato</option>
            <option value="2">Nitrito</option>
            <option value="3">Cloro</option>
            <option value="4">Amónia</option>
            <option value="5">GH</option>
            <option value="6">KH</option>
          </Form.Select>  
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Novo valor a introduzir</Form.Label>
              <Form.Control
                type="name"
                autoFocus 
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
          <Button variant="primary" onClick={parameters}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

        <div>
            <Container>
      <Row><Col><Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Fish20</Navbar.Brand>
          <Button className="buttonHomepage" onClick={ () => {
                    navigate('/login');
                }}>
                    Login</Button>
        </Container>
      </Navbar></Col></Row>
     
      <Row><Col><Button className='rounded' onClick={handleShow}>+</Button>

        <ListGroup>
            <ListGroup.Item>Ph <Button onClick={()=>changeParameter(0)}>^</Button></ListGroup.Item>
            <ListGroup.Item>Nitrato<Button onClick={()=>changeParameter(1)}>^</Button></ListGroup.Item>
            <ListGroup.Item>Nitrito<Button onClick={()=>changeParameter(2)}>^</Button></ListGroup.Item>
            <ListGroup.Item>Cloro <Button onClick={()=>changeParameter(3)}>^</Button></ListGroup.Item>
            <ListGroup.Item>Amónia <Button onClick={()=>changeParameter(4)}>^</Button></ListGroup.Item>
            <ListGroup.Item>GH <Button onClick={()=>changeParameter(5)}>^</Button></ListGroup.Item>
            <ListGroup.Item>KH <Button onClick={()=>changeParameter(6)}>^</Button></ListGroup.Item>
        </ListGroup></Col>
    <Col>
        <Row><Col>
        
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datep" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="quantityP" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <Row><Col>min {minMaxes[currentParameter].min + " " + minMaxes[currentParameter].unit}</Col><Col>max {minMaxes[currentParameter].max + " " + minMaxes[currentParameter].unit}</Col></Row>
        </Col></Row>
        </Col>
        </Row>
      </Container>
        </div>
        </>
    )
}

export default Parameters