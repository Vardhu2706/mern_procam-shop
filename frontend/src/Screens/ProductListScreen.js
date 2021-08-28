import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Table, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { listProducts, deleteProduct } from "../Actions/ProductActions";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

// Functional Component
const ProductListScreen = ({ history, match }) => {
  // Initializing Dispatch
  const dispatch = useDispatch();

  // Get products stored in state
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // Get product delete response from state
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  // Get logged-in user info from state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Use Effect
  useEffect(() => {
    // Check if logged in user is Admin
    if (userInfo && userInfo.isAdmin) {
      // If Admin, fetch products list
      dispatch(listProducts("/all"));
    } else {
      // If not admin, redirect to login screen
      history.push("/login");
    }
  }, [dispatch, history, userInfo, successDelete]);

  // Delete Product Handler
  const deleteHandler = (id) => {
    // Dispatch delete action on confirmation
    if (window.confirm("Delete product?")) {
      dispatch(deleteProduct(id));
    }
  };

  // Create Product Handler
  const createProductHandler = (product) => {
    // Create a product
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
      </Row>
      {loadingDelete ? (
        <Loader />
      ) : errorDelete ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <></>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price.toLocaleString("en-US")}</td>
                  <td>{product.category.toUpperCase()}</td>
                  <td>{product.brand}</td>

                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="primary" className="btn-sm">
                        <FaEdit style={{ fontSize: "1.2rem" }} />
                      </Button>
                    </LinkContainer>
                    {product.isAdmin ? (
                      <></>
                    ) : (
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(product._id)}
                      >
                        <FaTrash style={{ fontSize: "1.2rem" }} />
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ProductListScreen;
