import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo2 from '../assets/logo2.png'
import { NavLink } from 'react-router-dom';


import CartWidget from "./CartWidget";

export default function NavBar(){
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img src={logo2} alt="logo" id='logo'/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/category/s">Talla S</Nav.Link>
            <Nav.Link as={NavLink} to="category/l">Talla L</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>

    )
}