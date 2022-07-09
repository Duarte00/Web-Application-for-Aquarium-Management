import React, {useState, useEffect} from 'react'
import{useNavigate} from "react-router-dom";
import {Navbar, Nav, Container, } from 'react-bootstrap';
import Axios from "axios"

function NavBarOn(props) {

  const navigate=useNavigate(props);
  const[logged, setlogged] = useState(false);
  
  useEffect(() => {
  Axios.get("http://localhost:3001/login").then((response)=> {
    console.log(response);
    setlogged(response.data.loggedIn);
  })

  }, []);

    const logout = () => {
      Axios.get('http://localhost:3001/logout', {
        baseURL: "http://localhost:3001/",
      }).then((respose) => {
        console.log(respose);
          navigate('/');    
      });
    };

  return (
    <>
    <Navbar className='navBarColor'>
        <Container>
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <a onClick={ () => {
                    navigate('/');
                }}><li>Página Inicial</li></a>
                <a onClick={ () => {
                    navigate('/profile');
                }}><li>Aquários</li></a>
                <a onClick={ () => {
                    navigate('/AquariumInfo/alerts/');
                }}><li>Alertas</li></a>
              </ul>
            </div>
          <Container>
          <Nav className="me-auto">
          <Navbar.Brand href="/">Fish20</Navbar.Brand>
          </Nav>
          </Container>
          
          {
           !logged ?
          (<button  className="buttonNavBar" onClick={ () => {
              navigate('/login');
          }}>
              Login</button>)

             : (<button  className="buttonNavBar" onClick={ () => {
                logout();
                navigate('/');
            }}>
                Logout</button>)    
          }
          
        </Container>
    </Navbar>
    </>
  )
}

export default NavBarOn;