// Importing Helpers
import React from "react";

// Importing Components
import { Container, Row, Col } from "react-bootstrap";

// Functional Component
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; ProCam Shop</Col>
        </Row>
      </Container>
    </footer>
  );
};

// Default Export
export default Footer;
