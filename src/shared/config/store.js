import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'config/rootReducer';


const middleware = [
  thunkMiddleware,
];

const enhancer = composeWithDevTools(
  applyMiddleware(...middleware),
);

// const reduxDevTools = (typeof window !== 'undefined')
//   && (process.env.NODE_ENV !== 'production')
//   && window.__REDUX_DEVTOOLS_EXTENSION__
//   && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = (initialState = {}) => (
  createStore(
    rootReducer,
    initialState,
    enhancer,
  )
);

export default configureStore;
