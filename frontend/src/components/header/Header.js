import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../pages/user-auth-slice/userAction';
import './header.css';
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

  const dispatch = useDispatch();

  return (
    <div>
      <div className="text-center">Free shipping available on all orders!</div>
      <Navbar collapseOnSelect bg="secondary" expand="md">
        <Container>
          <LinkContainer to="/dashboard">
            <Navbar.Brand className="text-white">DAWN</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle
            className="text-white"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-white">
              <LinkContainer to="/search">
                <Nav.Link className="text-white">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/user">
                <Nav.Link className="text-white">
                  <i class="fa-solid fa-user"></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link className="text-white">
                  <i class="fa-solid fa-bag-shopping"></i>
                </Nav.Link>
              </LinkContainer>
              <Nav>
                <Nav.Link
                  className="text-white"
                  onClick={() => {
                    dispatch(userLogout());
                  }}
                >
                  <i class="fa-solid fa-right-from-bracket"></i>
                </Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex justify-content-around flex-wrap">
        {categories.map((category, i) => (
          <Nav.Link>{category}</Nav.Link>
        ))}
      </div>
      <hr />
    </div>
  );
};
