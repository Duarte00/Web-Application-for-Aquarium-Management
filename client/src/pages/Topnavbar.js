import React from 'react'
import '../App.css';
import{useNavigate} from "react-router-dom";
import { Navbar, Container, Button } from 'react-bootstrap';

function Topnavbar() {

    let navigate = useNavigate();

  return (
    <div>

    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Fish20</Navbar.Brand>
          <Button className="buttonHomepage" onClick={ () => {
                    navigate('/login');
                }}>
                    Login</Button>
        </Container>
      </Navbar>

    </div>
  )
}

export default Topnavbar;