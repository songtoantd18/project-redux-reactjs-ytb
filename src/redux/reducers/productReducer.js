import { ActionTypes } from "./../constants/action-types";
const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  // console.log("state:", state);
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SELECTED_PRODUCT:
      return state;
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return state;
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      console.log("payload:", payload);
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      console.log("payload:", payload);
      return {};
    default:
      return state;
  }
};
