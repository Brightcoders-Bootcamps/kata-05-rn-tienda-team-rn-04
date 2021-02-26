import {ADD_PRODUCT, DELETE_PRODUCT, CLEAR_PRODUCTS} from '../actions/types';

function productsReducer(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    case CLEAR_PRODUCTS:
      return [];
    default:
      return state;
  }
}

export default productsReducer;
