// Importing Helpers
import React from "react";

import { Row, Col } from "react-bootstrap";
import products from "../products_new";
import Product from "../Components/Product";
import Socials from '../Components/Socials'

// Functional Component
const HomeScreen = () => {
  return (
    <>
      <h1>Featured Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      <Row>

      </Row>
    </>
  );
};

// Default Export
export default HomeScreen;
