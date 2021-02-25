import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ProductsReducer from './ProductsReducer';
const rootReducer = combineReducers({
  Auth: AuthReducer,
  Products: ProductsReducer
});

export default rootReducer;
