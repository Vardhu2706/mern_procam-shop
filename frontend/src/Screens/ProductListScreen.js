import React, { useEffect } from "react";
import { Button, Table, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { listProducts, deleteProduct } from "../Actions/ProductActions";
import { FaTrash } from "react-icons/fa";
import { PRODUCT_CREATE_RESET } from "../Constants/ProductConstants";

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

  // Get product create response from state
  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  // Use Effect
  useEffect(() => {
    // Resetting
    dispatch({ type: PRODUCT_CREATE_RESET });
    // Check if logged in user is Admin
    if (!userInfo.isAdmin) {
      // If Admin, fetch products list
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts("/all"));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
  ]);

  // Delete Product Handler
  const deleteHandler = (id) => {
    // Dispatch delete action on confirmation
    if (window.confirm("Delete product?")) {
      dispatch(deleteProduct(id));
    }
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
      {loadingCreate ? (
        <Loader />
      ) : errorCreate ? (
        <Message variant="danger">{errorCreate}</Message>
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
                    {product.isAdmin ? (
                      <></>
                    ) : (
                      <>
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => deleteHandler(product._id)}
                        >
                          <FaTrash style={{ fontSize: "1.2rem" }} />
                        </Button>
                      </>
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
