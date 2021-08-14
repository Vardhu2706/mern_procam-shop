// Importing Helpers
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductsByCategory } from "../Actions/productActions";
import Product from "../Components/Product";
import { Row, Col } from "react-bootstrap";
import Loader from "../Components/Loader";
import Message from "../Components/Message";

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

  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);

  const { loading, error, categoryProducts } = categoryList;

  useEffect(() => {
    dispatch(listProductsByCategory(category));
  }, [dispatch, category]);

  return (
    <>
      <h2 className="mt-3">{specifyCategory(category)}</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {categoryProducts.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default CategoriesScreen;
