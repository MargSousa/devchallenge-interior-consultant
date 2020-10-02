import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Menu.css';

const Menu = () => {

  const [show, setShow] = useState(true);

  const handleMenu = () => {
    setTimeout(setShow(!show), 2000);
  }

  console.log(show);

  return (
    <>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
          { show ? <Navbar.Brand>This interior</Navbar.Brand> : '' }
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleMenu}>
          {show ? 
            <i className="material-icons menu-icon">menu</i>
          : 
            <i className="material-icons menu-icon">close</i>
          }
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Collection</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
 
export default Menu;
