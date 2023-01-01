import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  console.log("products:", products);
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProducts = (product) => {
  console.log("product:", product);
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProducts = (product) => {
  console.log("product:", product);
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
