import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listFilteredProducts } from "../Actions/productActions";
import Product from "../Components/Product";
import Loader from "../Components/Loader";
import Message from "../Components/Message";

const CustomScreen = ({ flag }) => {
  console.log(flag);
  //   const dispatch = useDispatch();
  //   const productList = useSelector((state) => state.productList);
  //   const { loading, error, products } = productList;

  //   useEffect(() => {
  //     dispatch(listFilteredProducts());
  //   }, [dispatch]);
  //   return (
  //     <div>
  //       {loading ? (
  //         <Loader />
  //       ) : error ? (
  //         <Message variant="danger">{error}</Message>
  //       ) : (
  //         <Row>
  //           {products.map((product) => (
  //             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
  //               <Product product={product} />
  //             </Col>
  //           ))}
  //         </Row>
  //       )}
  //     </div>
  //   );
  return <div>Hello</div>;
};

export default CustomScreen;
