// Importing Helpers
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Product from "../Components/Product";

// Functional Components
const CustomPage = ({ flag }) => {
  console.log(flag);
  // State Variables
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // const { data } = await axios.get("/api/featured-products");
      const { data } = await axios.get(`/api/${flag}`);
      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h1>Featured Products</h1>
      {products ? (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <> </>
      )}
    </>
  );
};

// Default Export
export default CustomPage;
