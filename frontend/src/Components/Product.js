// Importing Helpers
import React from "react";

// Importing Components
import { Card, Row } from "react-bootstrap";
import Rating from "../Components/Rating";

// Functional Component
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* Product Image */}
      <a href={`/product/${product.image}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      {/* Product Title */}
      <a href={`/product/${product.image}`}>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </a>

      {/* Product Rating */}
      <Card.Text as="div">
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </Card.Text>

      {/* Product Price */}
      <Card.Text as="h3">${product.price}</Card.Text>
    </Card>
  );
};

// Default Export
export default Product;
