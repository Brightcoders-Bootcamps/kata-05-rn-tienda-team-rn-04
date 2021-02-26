import firestore from '@react-native-firebase/firestore';
import {
  CREATE_ORDER,
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_SUCCESS,
} from './types';
import {clearProducts} from './ProductsActions';
function createOrder() {
  return {
    type: CREATE_ORDER,
  };
}

function createOrderSuccess(order) {
  return {
    type: CREATE_ORDER_SUCCESS,
    payload: order,
  };
}

function createOrderFailure(msg) {
  return {
    type: CREATE_ORDER_FAILURE,
    payload: msg,
  };
}

export function createOrderFunction(order) {
  return async (dispatch) => {
    dispatch(createOrder());
    try {
      const res = await firestore().collection('Order').add(order);
      const newOrder = await res.get();
      dispatch(createOrderSuccess(newOrder._data));
      dispatch(clearProducts());
    } catch (error) {
      dispatch(createOrderFailure(error.msg));
    }
  };
}
