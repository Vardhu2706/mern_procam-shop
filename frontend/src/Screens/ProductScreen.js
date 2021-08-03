// importing Helpers
import React from "react";
import { Link } from "react-router-dom";

import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Tabs,
  Tab,
  Carousel,
} from "react-bootstrap";
import Rating from "../Components/Rating";
import products from "../products_new";

// Functional Component
const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      {/* Back Button */}
      <Link className="btn btn-outline-dark my-3" to="/">
        <i class="fas fa-angle-left"></i> Go Back
      </Link>

      {/* Body */}
      <Row>
        <Col md={5}>
          <Carousel pause="hover" className="bg-light main_carousel" fade>
            {product.showcase.map((path) => (
              <Carousel.Item key={path}>
                <Image src={path} alt={product.name} fluid />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            {/* Product Name */}
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            {/* Rating */}
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>

            {/* Price */}
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

            {/* Description */}
            <ListGroup.Item>
              <h5>Features:</h5>
              <p>{product.features}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              {/* Price */}
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              {/* Status */}
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              {/* Add To Cart Button */}
              <ListGroup.Item>
                <Button
                  className="btn-block w-100"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <Tabs
          defaultActiveKey="description"
          id="uncontrolled-tab-example"
          className="my-3"
        >
          <Tab eventKey="description" title="Description">
            {product.description}
          </Tab>
          <Tab eventKey="specifications" title="Specifications"></Tab>
          <Tab eventKey="reviews" title="Reviews"></Tab>
        </Tabs>
      </Row>
      <Row>{/* Add Suggested */}</Row>
    </>
  );
};

// Default Export
export default ProductScreen;
