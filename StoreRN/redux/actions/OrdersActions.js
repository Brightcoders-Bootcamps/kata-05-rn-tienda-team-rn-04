import firestore from '@react-native-firebase/firestore';
import {
  CREATE_ORDER,
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_SUCCESS,
  GET_ORDERS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_SUCCESS,
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

function getOrders() {
  return {
    type: GET_ORDERS,
  };
}
function getOrdersSuccess(orders) {
  return {
    type: GET_ORDERS_SUCCESS,
    payload: orders,
  };
}
function getOrdersFailure(msg) {
  return {
    type: GET_ORDERS_FAILURE,
    payload: msg,
  };
}

export function getOrdersFunction(userId) {
  return (dispatch) => {
    dispatch(getOrders());
    firestore()
      .collection('Order')
      .where('UserId', '==', userId)
      .get()
      .then((querySnapshot) => {
        dispatch(getOrdersSuccess(querySnapshot.docs));
      })
      .catch((err) => dispatch(getOrdersFailure(err.msg)));
  };
}
