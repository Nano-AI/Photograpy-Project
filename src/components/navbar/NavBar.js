import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Camera</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="diagram">Diagram of a DSLR</Nav.Link>
            <NavDropdown title="Amazing Aperture">
              <NavDropdown.Item href="#action/3.1">
                What is it?
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">F-Stop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Depth of Field
              </NavDropdown.Item>
            </NavDropdown>  
            <Nav.Link>Super Shutter Speed</Nav.Link>
            <Nav.Link>Incredible ISO</Nav.Link>
            <Nav.Link>Working Together</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
