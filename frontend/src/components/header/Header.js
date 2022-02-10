import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const Header = () => {
  const categories = [
    'Mobile',
    'TVs',
    'Laptops',
    'Computers',
    'Camera',
    'Wearables',
    'Audio & Home Theatres',
  ];
  return (
    <div>
      <div className="text-center">Free shipping available on all orders!</div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">DAWN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#search">
                <i class="fa-solid fa-magnifying-glass"></i>
              </Nav.Link>
              <Nav.Link href="#user">
                <i class="fa-solid fa-user"></i>
              </Nav.Link>
              <Nav.Link href="#user">
                <i class="fa-solid fa-bag-shopping"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex justify-content-around flex-wrap">
        {categories.map((category, i) => (
          <Nav.Link>{category}</Nav.Link>
        ))}
      </div>
    </div>
  );
};
