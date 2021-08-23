import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Table, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import {
  listProductsByCategory,
  deleteProduct,
} from "../Actions/ProductActions";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const ProductListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categoryProducts: products } = categoryList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProductsByCategory("/all"));
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo, successDelete]);

  // Delete User Handler
  const deleteHandler = (id) => {
    if (window.confirm("Delete product?")) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = (product) => {
    // Create a product
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-end">
          <Button className="my-3" onClick={createProductHandler}>
            <FaPlus style={{ fontSize: "1.2rem" }} /> Create Product
          </Button>
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
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price.toLocaleString("en-US")}</td>
                  <td>{product.category}</td>
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
