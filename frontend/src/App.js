// Importing Helpers
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Components/header";
import Footer from "./Components/footer";
import HomeScreen from "./Screens/homeScreen";
import ProductScreen from "./Screens/productScreen";
import CategoriesScreen from "./Screens/categoriesScreen";
import LoginScreen from "./Screens/loginScreen";
import RegisterScreen from "./Screens/registerScreen";
import CartScreen from "./Screens/cartScreen";
import ProfileScreen from "./Screens/profileScreen";
import ShippingScreen from "./Screens/shippingScreen";
import PaymentScreen from "./Screens/paymentScreen";
import PlaceOrderScreen from "./Screens/placeOrderScreen";
import OrderScreen from "./Screens/orderScreen";
import UserListScreen from "./Screens/userListScreen";
import UserEditScreen from "./Screens/userEditScreen";
import ProductListScreen from "./Screens/productListScreen";
import OrderListScreen from "./Screens/orderListScreen";

// Functional Component
const App = () => {
  console.log("ProCamShop by Vardhu2706@GitHub");
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/signup" component={RegisterScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/categories/:category" component={CategoriesScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/productlist" component={ProductListScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/search/:keyword" component={HomeScreen} />
          <Route path="/" exact component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

// Default Export
export default App;
