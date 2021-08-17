// PlaceOrder Screen
import React, { useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import { getOrderDetails } from "../Actions/OrderActions";

const OrderScreen = ({ match }) => {
  const dispatch = useDispatch();
  const orderId = match.params.id;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  if (order) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(0);
    };
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : order ? (
    <>
      <h1>Order {orderId}</h1>
      <>
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              {/* Address */}
              <ListGroup.Item>
                <h2>Shipping</h2>
                <p>
                  <strong>Name: </strong> {order.user.name}
                </p>
                <p>
                  <strong>Email: </strong>
                  <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                </p>

                <p>
                  <strong>Address: </strong>
                  {order.shippingAddress.address},{order.shippingAddress.city},
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <Message variant="success">
                    Delivered on {order.deliveredAt}
                  </Message>
                ) : (
                  <Message variant="danger">Not Delivered</Message>
                )}
              </ListGroup.Item>

              {/* Payment Method */}
              <ListGroup.Item>
                <h2>Payment Method</h2>
                <p>
                  <strong>Method: </strong>
                  {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <Message variant="success">Paid on {order.paidAt}</Message>
                ) : (
                  <Message variant="danger">Not paid</Message>
                )}
              </ListGroup.Item>

              {/* Ordered Items */}
              <ListGroup.Item>
                <h2>Order Items</h2>
                {order.orderItems.length === 0 ? (
                  <Message>
                    Order is empty.
                    <Link to="/" className="mx-1">
                      Continue Shopping
                    </Link>
                  </Message>
                ) : (
                  <ListGroup variant="flush">
                    {order.orderItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={2}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={4}>
                            {item.qty} x ₹{item.price.toLocaleString("en-IN")} =
                            ₹{(item.qty * item.price).toLocaleString("en-IN")}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Order Summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Items:</Col>
                    <Col>₹{order.itemsPrice.toLocaleString("en-IN")}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping:</Col>
                    <Col>₹{order.shippingPrice.toLocaleString("en-IN")}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax:</Col>
                    <Col>₹{order.taxPrice.toLocaleString("en-IN")}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total:</Col>
                    <Col>₹{order.totalPrice.toLocaleString("en-IN")}</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    </>
  ) : (
    <></>
  );
};

export default OrderScreen;
