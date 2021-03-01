import {
  GET_ORDERS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_SUCCESS,
} from '../actions/types';

function getOrdersReducer(state = [], action) {
  switch (action.type) {
    case GET_ORDERS:
      return state;
    case GET_ORDERS_SUCCESS:
      return action.payload;
    case GET_ORDERS_FAILURE:
      return [];
    default:
      return state;
  }
}

export default getOrdersReducer;
