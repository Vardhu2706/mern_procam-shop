// Header Component

// Importing Helpers
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Actions/UserActions";
import { Route } from "react-router-dom";

// Importing Components
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "../Components/SearchBox";

// Functional Component
const Header = () => {


  // Initializing Dispatch
  const dispatch = useDispatch();

  // Getting logged in user data from Redux store
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Getting cart data from Redux store
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // Logout Handler
  const logoutHandler = () => {
    dispatch(logout());
  };

  // Return
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* Logo */}
          <LinkContainer to="/">
            <Navbar.Brand href="/">ProCam Shop</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Search Box */}
            <Route render={({ history }) => <SearchBox history={history} />} />

            {/* Categories Dropdown */}
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

              {/* Cart */}
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart (
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)})
                </Nav.Link>
              </LinkContainer>

              {/* Login/Profile */}
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

              {/* Additional Admin Options Menu */}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
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
