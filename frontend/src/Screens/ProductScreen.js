// importing Helpers
import React, { useState, useEffect } from "react";
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
  Table,
} from "react-bootstrap";
import Rating from "../Components/Rating";

import axios from "axios";

const FeaturesTable = ({ features }) => {
  return (
    <>
      <Table striped bordered size="sm" responsive className="table-responsive">
        <tbody>
          {Object.entries(features).map((feature) => {
            return (
              <tr key={feature}>
                {feature[0].length !== 1 ? (
                  <td>
                    <h6 className="feat">{feature[0]}</h6>
                  </td>
                ) : (
                  <></>
                )}
                <td>
                  <h6>{feature[1]}</h6>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

// Functional Component
const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [match]);

  return (
    <>
      {/* Back Button */}
      <Link className="btn btn-outline-dark my-3" to="/">
        <i className="fas fa-angle-left"></i> Go Back
      </Link>

      {/* Body */}
      <Row>
        <Col md={5}>
          {product.showcase ? (
            <Carousel pause="hover" className="bg-light main_carousel" fade>
              {product.showcase.map((path) => (
                <Carousel.Item key={path}>
                  <Image src={path} alt={product.name} fluid />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <></>
          )}
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            {/* Product Name */}
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            {/* Rating */}
            {/*  */}
            {/* Description */}
            <ListGroup.Item>
              <h5>Features:</h5>
              {/* <p>{product.features}</p> */}
              {product.features ? (
                <FeaturesTable features={product.features} />
              ) : (
                <></>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              {/* Price */}
              <ListGroup.Item className="text-center">
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>₹{product.price}</strong>
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
          <Tab eventKey="reviews" title="Reviews"></Tab>
        </Tabs>
      </Row>
      <Row>{/* Add Suggested */}</Row>
    </>
  );
};

// Default Export
export default ProductScreen;
