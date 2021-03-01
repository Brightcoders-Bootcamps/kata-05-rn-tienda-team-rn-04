import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ProductsReducer from './ProductsReducer';
import OrdersReducer from './OrdersReducer';
import getOrdersReducer from './GetOrdersReducer';
const rootReducer = combineReducers({
  Auth: AuthReducer,
  Products: ProductsReducer,
  Orders: OrdersReducer,
  GetOrders: getOrdersReducer,
});

export default rootReducer;
