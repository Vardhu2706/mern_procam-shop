// Importing Helpers
import React from "react";

// Importing Components/Files
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../Components/Product";

// Functional Component
const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            {/* <h3>{product.name}</h3> */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

// Default Export
export default HomeScreen;
