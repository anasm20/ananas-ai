import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../img/logo.png';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo} // to editing the logo size 
            width="50" 
            height="60" 
            className="d-inline-block align-top" 
            alt="Ananas Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> 
            <Nav.Link as={Link} to="/information">Information</Nav.Link>
            <Nav.Link as={Link} to="/flipp-card">Flipp-Card</Nav.Link>
            {/* <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link> */}
            <Nav.Link as={Link} to="/quiz-test">Quiz Test</Nav.Link>
            <Nav.Link as={Link} to="/ananasAI">AnanasAI</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
