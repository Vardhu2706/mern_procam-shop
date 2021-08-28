// Importing Helpers
import React, { useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import { listProducts } from "../Actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import Socials from "../Components/Socials";
import Product from "../Components/Product";
import Brands from "../Components/Brands";
import Loader from "../Components/Loader";
import Message from "../Components/Message";

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// Functional Component
const HomeScreen = ({ history }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  let shuffled_products = shuffle(products);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Row></Row>
      <h2 className="mt-3">Featured Products</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {shuffled_products.slice(0, 12).map((product) => (
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
      <h2 className="mt-3">Shop Top Brands</h2>
      <Row>
        <Brands />
      </Row>
    </>
  );
};

// Default Export
export default HomeScreen;
