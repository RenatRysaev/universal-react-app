import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { AppContainer, setConfig } from 'react-hot-loader';

import configureStore, { history } from 'config/store';

import App from 'shared/App';


setConfig({ logLevel: 'debug' });

Loadable.preloadReady().then(() => {
  const preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;

  const store = configureStore(preloadedState);

  const render = (Component) => {
    ReactDOM.hydrate(
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Component />
          </ConnectedRouter>
        </Provider>
      </AppContainer>,
      document.getElementById('root'),
    );
  }

  render(App);

  // webpack Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('shared/App', () => {
      render(App);
    });
  }
});
