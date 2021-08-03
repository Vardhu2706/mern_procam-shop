// Importing Helpers
import React, { useState, useEffect } from "react";
import axios from "axios";

import { Row, Col } from "react-bootstrap";
// import Socials from "../Components/Socials";
import Product from "../Components/Product";

// Functional Component
const HomeScreen = () => {
  // State Variables
  const [products, setProducts] = useState([]);

  // UseEffect Lifecycle Method
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/featured-products");
      setProducts(data);
    };

    fetchProducts();
  }, []);
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
      <Row></Row>
    </>
  );
};

// Default Export
export default HomeScreen;
