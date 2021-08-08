// Importing Helpers
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

// Functional Component
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3 ">
        <Container>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:id" exact component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

// Default Export
export default App;
