// Importing Helpers
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

import Socials from "../Components/Socials";
import Product from "../Components/Product";
import Brands from "../Components/Brands";

// Functional Component
const HomeScreen = () => {
  // State Variables
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // const { data } = await axios.get("/api/featured-products");
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h2 className="my-2">Featured Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      {/* Socials */}
      <Row>
        <Socials />
      </Row>
      {/* Shop By Brand */}
      <Row>
        <Brands />
      </Row>
    </>
  );
};

// Default Export
export default HomeScreen;
