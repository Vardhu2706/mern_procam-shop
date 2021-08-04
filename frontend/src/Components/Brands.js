// Importing Helpers
import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// Functional Component
const Brands = () => {
  return (
    <div className="my-3">
      <h1>Shop Top Brands</h1>
      <div className="d-flex flex-column flex-lg-row justify-content-center">
        <div className="p-2">
          <LinkContainer to="/products/canon">
            <img
              src="/images/brands/canon.jpg"
              alt="canon"
              className="rounded"
            />
          </LinkContainer>
        </div>
        <div className="p-2">
          <LinkContainer to="/products/canon">
            <img
              style={{ height: "180px", width: "286px" }}
              src="/images/brands/nikon.jpg"
              alt="nikon"
              className="rounded"
            />
          </LinkContainer>
        </div>
        <div className="p-2">
          <LinkContainer to="/products/canon">
            <img
              src="/images/brands/olympus.jpg"
              alt="olympus"
              className="rounded"
            />
          </LinkContainer>
        </div>
        <div className="p-2">
          <LinkContainer to="/products/canon">
            <img
              src="/images/brands/fujifilm.jpg"
              alt="fujifilm"
              className="rounded"
            />
          </LinkContainer>
        </div>
      </div>
    </div>
  );
};

// Default Export
export default Brands;
