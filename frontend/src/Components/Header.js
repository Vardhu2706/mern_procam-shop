// Header Component

// Importing Helpers
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Actions/UserActions";

// Importing Components
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// Functional Component
const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch(logout());
  };

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
              <NavDropdown id="nav-dropdown-dark" title="Categories">
                <LinkContainer to="/categories/cameras">
                  <NavDropdown.Item>Cameras</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/categories/lenses">
                  <NavDropdown.Item>Camera Lens</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/categories/action">
                  <NavDropdown.Item>Action Cameras</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/categories/audio">
                  <NavDropdown.Item>
                    Pro Audio{" "}
                    <span className="badge rounded-pill bg-primary">New</span>
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/categories/all">
                  <NavDropdown.Item>All Products</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart (
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)})
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

// Default Export
export default Header;
