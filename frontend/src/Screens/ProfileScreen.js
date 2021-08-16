// Profile Screen

// Importing Helpers
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { getUserDetails, updateUserProfile } from "../Actions/UserActions";

// Functional Component
const ProfileScreen = ({ location, history }) => {
  // Component Level State Variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  // Getting User Details from Redux store.
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  // Getting user login to check if user is logged in or not to access the profile page.
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Get update success
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  // Use Effect - Checking is logged in or not.
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  // Form Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Row>
      {/* Column for user profile */}
      <Col md={3}>
        <h2 className="mt-2">Profile</h2>

        {/* Error handling */}
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
        {loading && <Loader></Loader>}

        {/* Form */}
        <Form onSubmit={submitHandler}>
          {/* Name */}
          <Form.Group controlId="name" className="mt-4">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Email */}
          <Form.Group controlId="email" className="mt-4">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Password */}
          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Confirm Password */}
          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-Enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Sign Up Button */}
          <Button type="submit" variant="primary" className="my-3 w-100">
            Update
          </Button>
        </Form>
      </Col>

      {/* Column for order details */}
      <Col md={9}>
        <h2 className="mt-2">My Orders</h2>
      </Col>
    </Row>
  );
};

// Export Default
export default ProfileScreen;
