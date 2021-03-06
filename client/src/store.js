import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from './reducers/rootReducer';
export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, promise)
  );
}