// Importing Helpers
import React from "react";
import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";
import Rating from "../Components/Rating";

// Functional Component
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* Product Image */}
      <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      {/* Product Title */}
      <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>

      {/* Product Rating */}
      <Card.Text as="div">
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </Card.Text>

      {/* Product Price */}
      <Card.Text as="h3">₹{product.price.toLocaleString("en-IN")}</Card.Text>
    </Card>
  );
};

// Default Export
export default Product;
