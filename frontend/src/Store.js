import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Importing Product Reducers
import {
  productListReducer,
  productDetailsReducer,
  productsCategoriesReducer,
  productsBrandReducer,
} from "./Reducers/ProductReducers";

// Importing Cart Reducers
import { cartReducer } from "./Reducers/CartReducers";

// Importing UserReducers
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./Reducers/UserReducers";

// Importing Order Reducers
import { orderCreateReducer } from "./Reducers/OrderReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  categoryList: productsCategoriesReducer,
  brandList: productsBrandReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
});

// Getting cart info from storage
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// Getting user info from storage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Loading Shipping address from local storage
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
