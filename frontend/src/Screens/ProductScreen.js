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
  Carousel,
  Table,
  Form,
} from "react-bootstrap";
import Rating from "../Components/Rating";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
  createProductReview,
} from "../Actions/ProductActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../Constants/ProductConstants";

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
const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { error: errorProductReview, success: successProductReview } =
    productReviewCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (successProductReview) {
      alert("Review Submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match, successProductReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(match.params.id, { rating, comment }));
  };

  return (
    <>
      <Link className="btn btn-outline-dark mt-3" to="/">
        <i className="fas fa-angle-left"></i> Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <h2 className="my-3">{product.name}</h2>
          <Row>
            <Col md={5}>
              {product.showcase ? (
                <Carousel pause="hover" className="bg-light carousel">
                  {product.showcase.map((path) => (
                    <Carousel.Item key={path} className="carousel-item">
                      <Image
                        src={path}
                        alt={product.name}
                        fluid
                        className="d-block w-100"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <></>
              )}
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
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
                  <ListGroup.Item className="text-center">
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      {product.price ? (
                        <Col>
                          <strong>
                            ${product.price.toLocaleString("en-IN")}
                          </strong>
                        </Col>
                      ) : (
                        <></>
                      )}
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty:</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      className="btn-block w-100"
                      type="button"
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="my-3">
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating rating={product.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a review</h2>
                  {errorProductReview && (
                    <Message variant="danger">{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment" className="my-3">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button type="submit" variant="primary">
                        Post Comment
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      <Link to="/login">Login</Link> to review the product.
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

// Default Export
export default ProductScreen;
