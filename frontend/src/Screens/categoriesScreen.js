// Importing Helpers
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductsByCategory } from "../Actions/productActions";
import { Link } from "react-router-dom";
import Product from "../Components/product";
import { Row, Col } from "react-bootstrap";
import Loader from "../Components/loader";
import Message from "../Components/message";
import { Helmet } from "react-helmet";
import Pagination from "../Components/pagination";

const specifyCategory = (category) => {
  let base = "Shop ";
  if (category === "cameras") {
    return base + "cameras";
  } else if (category === "action") {
    return base + "action cameras & Accessories";
  } else if (category === "audio") {
    return base + "audio products";
  } else if (category === "lenses") {
    return base + category;
  } else if (category === "all") {
    return base + "All products";
  }
};

const CategoriesScreen = ({ location }) => {
  const category = location.pathname.split("/")[2];

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);

  const { loading, error, categoryProducts } = categoryList;

  useEffect(() => {
    dispatch(listProductsByCategory(category));
  }, [dispatch, category]);

  // Get Current Post
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = categoryProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Helmet>
        <title>ProCam Shop | Categories</title>
      </Helmet>
      <Link className="btn btn-outline-dark mt-3" to="/">
        <i className="fas fa-angle-left"></i> Go Back
      </Link>
      <h2 className="mt-3">{specifyCategory(category)}</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {currentProducts.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Row>
            {categoryProducts ? (
              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={categoryProducts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            ) : (
              <></>
            )}
          </Row>
        </>
      )}
    </>
  );
};

export default CategoriesScreen;
