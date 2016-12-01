import React from 'react';
import {Provider} from 'react-redux';
import Home from './Home';
import createStore from './createStore'

const store = createStore();

const Main = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default Main;
