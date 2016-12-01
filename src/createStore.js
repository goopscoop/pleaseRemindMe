import { createStore, applyMiddleware, combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist'
import todos from './Todos/todos';
import todo from './Todo/todoModule';
import views from './Views/viewModule';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

export default () => {
  const logger = createLogger();
  const middleware = applyMiddleware(...[thunk, logger]);

  const rootReducer = combineReducers({
    todo,
    todos,
    views
  })

  const store = createStore(rootReducer, middleware, autoRehydrate())

  persistStore(store, {storage: AsyncStorage}) //.purge() // use this method to purge state on device
  return store;
}