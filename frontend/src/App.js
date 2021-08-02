// Importing Helpers
import React from "react";

// Importing Components
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Functional Component
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome To ProCam Shop</h1>
        </Container>
      </main>

      <Footer />
    </>
  );
};

// Default Export
export default App;
