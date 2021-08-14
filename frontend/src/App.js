// Importing Helpers
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CategoriesScreen from "./Screens/CategoriesScreen";
import BrandsScreen from "./Screens/BrandsScreen";

import CartScreen from "./Screens/CartScreen";

// Functional Component
const App = () => {
  return (
    <Router>
      <Header />

      <Container>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/categories/:category" component={CategoriesScreen} />
        <Route path="/brands/:brand" component={BrandsScreen} />
      </Container>

      <Footer />
    </Router>
  );
};

// Default Export
export default App;
