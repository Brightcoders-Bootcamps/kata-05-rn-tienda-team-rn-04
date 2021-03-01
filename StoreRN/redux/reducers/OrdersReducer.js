import {
  CREATE_ORDER,
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_SUCCESS,
} from '../actions/types';

function ordersReducer(state = [], action) {
  switch (action.type) {
    case CREATE_ORDER:
      return state;
    case CREATE_ORDER_SUCCESS:
      return [...state, action.payload];
    case CREATE_ORDER_FAILURE:
      return [];
    default:
      return state;
  }
}

export default ordersReducer;
