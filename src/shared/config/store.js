import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';

import rootReducer from 'config/rootReducer';


export const isServer = !(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);

export const history = isServer
  ? createMemoryHistory({})
  : createBrowserHistory();

const middleware = [
  thunkMiddleware,
  routerMiddleware(history),
];

const composeEnhancers = (process.env.NODE_ENV !== 'production')
  && !isServer
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const enhancers = composeEnhancers(
  applyMiddleware(...middleware),
)

const configureStore = (initialState = {}) => {
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    enhancers,
  );

  if (module.hot) {
    module.hot.accept('config/rootReducer', () => {
      const nextRootReducer = require('config/rootReducer');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
};

export default configureStore;
