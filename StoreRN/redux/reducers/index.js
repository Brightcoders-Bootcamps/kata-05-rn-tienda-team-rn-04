import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ProductsReducer from './ProductsReducer';
import OrdersReducer from './OrdersReducer';
const rootReducer = combineReducers({
  Auth: AuthReducer,
  Products: ProductsReducer,
  Orders: OrdersReducer,
});

export default rootReducer;
