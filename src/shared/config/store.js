import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'config/rootReducer';


const middleware = [
  thunkMiddleware,
];

const configureStore = (initialState = {}) => (
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  )
);

export default configureStore;
