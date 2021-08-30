// Search Box Component

// Importing Helpers
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

// Functional Component
const SearchBox = ({ history }) => {
  // State variables
  const [keyword, setKeyword] = useState("");

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();

    // Check if keyword is not empty
    if (keyword.trim()) {
      history.push(`/search/${keyword.trim()}`);
    } else {
      history.push("/");
    }
  };

  // Return
  return (
    //   Form
    <Form onSubmit={submitHandler} className="d-flex">
      {/* Search Field */}
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>

      {/* Search Button */}
      <Button type="submit" variant="outline-light" className="p-2">
        Search
      </Button>
    </Form>
  );
};

// Export Default
export default SearchBox;
