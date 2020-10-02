import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import './Menu.css';

const Menu = () => {
  return (
    <>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand>
          This interior
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">Collection</Nav.Link>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
 
export default Menu;