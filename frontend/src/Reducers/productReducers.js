import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
} from "../Constants/productConstants";

// A reducer takes in an initial state and an action
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_FAIL:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
