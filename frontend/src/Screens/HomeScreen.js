// Home Screen

// Importing Helpers
import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listProducts } from "../Actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

// Importing Components
import Socials from "../Components/Socials";
import Product from "../Components/Product";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import BrandCarousel from "../Components/BrandCarousel";

// Functional Component
const HomeScreen = ({ history, match }) => {
  // Getting Keyword from URL
  const keyword = match.params.keyword;

  // Initializing Dispatch
  const dispatch = useDispatch();

  // Getting Product List from redux store
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // Use Effect
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  // Return
  return (
    <>
      <Helmet>
        <title>ProCam Shop | Home</title>
      </Helmet>
      {!keyword ? (
        <BrandCarousel />
      ) : (
        <Link className="btn btn-outline-dark mt-3" to="/">
          <i className="fas fa-angle-left"></i> Go Back
        </Link>
      )}
      <Row></Row>
      <h2 className="mt-3">Featured Products</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.slice(0, 12).map((product) => (
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
    </>
  );
};

// Default Export
export default HomeScreen;
