import React, { useContext, useEffect } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavbarChef = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }

    return (
      <div className='position-relative'>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <h5 className='p-2'>The Fusion of Thai Chef's Cuisine</h5>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/blog'>Blog</Nav.Link>
          </Nav>
          <Nav>
            <div className='ms-5 position-relative'>
            {
               user &&  <img  style={{ 
                width: "60px", 
                height: "55px",
                borderRadius: "50%",
                objectFit: "cover"
              }} className='float-end m-4' src={user.photoURL}   alt="Profile"
               title={user.displayName}/>
                            }

                            {user ?
                                <Button className='float-end m-4 me-2' onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </div>
      

    );
  }

export default NavbarChef;