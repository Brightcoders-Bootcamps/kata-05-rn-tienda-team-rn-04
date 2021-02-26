import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Auth'],
  blacklist: ['Products', 'Orders'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
let persitor = persistStore(store);

export {store, persitor};
