import {ADD_PRODUCT, DELETE_PRODUCT, CLEAR_PRODUCTS} from './types';

export function add_product(product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}

export function delete_product(productId) {
  return {
    type: DELETE_PRODUCT,
    payload: productId,
  };
}

export function clearProducts() {
  return {type: CLEAR_PRODUCTS};
}
