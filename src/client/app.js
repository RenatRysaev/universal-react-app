import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';

import configureStore, { history } from 'config/store';

import App from 'shared/App';


Loadable.preloadReady().then(() => {
  const preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;

  const store = configureStore(preloadedState);

  ReactDOM.hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );
});
