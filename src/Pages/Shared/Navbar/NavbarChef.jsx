import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';


const NavbarChef = () => {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <h5 className='p-2'>The Fusion of Thai Chef's Cuisine</h5>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
            <Nav.Link to="/blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
               <h6 className='p-2'>Profile</h6>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="success">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </div>
      

    );
  }

export default NavbarChef;