import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../assets/images/logo.png';
const Header = () => {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Navbar.Brand href="#home"><img className="logo" src={Logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto d-flex justify-content-between">
            <Nav.Link className="nav-link-art" href="#About">About</Nav.Link>
            <Nav.Link className="nav-link-art" href="#Projects">Projects</Nav.Link>
            <Nav.Link className="nav-link-art" style={{ marginInline: '1.1rem' }} href="#Studio">Studio</Nav.Link>
            <Nav.Link className="nav-link-art" href="#Blog">Blog</Nav.Link>
            <Nav.Link className="nav-link-art" href="#Contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
};


export default Header;