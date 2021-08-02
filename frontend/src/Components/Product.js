// Importing Helpers
import React from "react";

// Importing Components
import { Card, Row } from "react-bootstrap";

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
        <div className="my-3">
          {product.rating} from {product.numReviews} reviews
        </div>
      </Card.Text>

      {/* Product Price */}
      <Card.Text as="h3">${product.price}</Card.Text>
    </Card>
  );
};

// Default Export
export default Product;
