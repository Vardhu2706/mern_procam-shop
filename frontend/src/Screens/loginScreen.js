// Login Screen

// Importing Helpers
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/message";
import Loader from "../Components/loader";
import { Helmet } from "react-helmet";
import { login } from "../Actions/userActions";
import FormContainer from "../Components/formContainer";

// Functional Component
const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      <Helmet>
        <title>ProCam Shop | Login</title>
      </Helmet>

      <Link className="btn btn-outline-dark mt-3" to="/">
        <i className="fas fa-angle-left"></i> Go Back
      </Link>
      <FormContainer>
        <h1 className="mt-2">Login</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader></Loader>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email" className="mt-4">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary" className="my-3 w-100">
            Login
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer?{" "}
            <Link to={redirect ? `/signup?redirect=${redirect}` : "/signup"}>
              Create an account
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

// Export Default
export default LoginScreen;
