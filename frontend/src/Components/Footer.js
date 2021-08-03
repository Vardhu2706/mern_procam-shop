// Importing Helpers
import React from "react";

import { Container, Row, Col } from "react-bootstrap";

// Functional Component
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; ProCam Shop | Built by Vardhaman Ayyagari
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Default Export
export default Footer;
