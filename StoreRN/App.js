import React from 'react';
import Index from './src/Index';
import {Provider} from 'react-redux';
import {store, persitor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persitor}>
        <Index />
      </PersistGate>
    </Provider>
  );
};


export default App;
