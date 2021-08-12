// Importing Helpers
import React from "react";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// Functional Component
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/">ProCam Shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Categories Dropdown */}
              <NavDropdown id="nav-dropdown-dark" title="Categories">
                <LinkContainer to="/cameras">
                  <NavDropdown.Item>Cameras</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/lenses">
                  <NavDropdown.Item>Camera Lens</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/action">
                  <NavDropdown.Item>Action Cameras</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/audio">
                  <NavDropdown.Item>
                    Pro Audio{" "}
                    <span className="badge rounded-pill bg-primary">New</span>
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/all-products">
                  <NavDropdown.Item>All Products</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

// Default Export
export default Header;
