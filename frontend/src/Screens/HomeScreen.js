// Importing Helpers
import React, { useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import { listProducts } from "../Actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Socials from "../Components/Socials";
import Product from "../Components/Product";
import Brands from "../Components/Brands";
import Loader from "../Components/Loader";
import Message from "../Components/Message";

// Functional Component
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h2 className="my-2">Featured Products</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}

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
