import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import CartWidget from "./CartWidget";

export default function NavBar(){
    return (
        <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Goal Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Infantil</Nav.Link>
            <Nav.Link href="#">Promoción</Nav.Link>
            <Nav.Link href="#">Accesorios</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
        </>
    )
}