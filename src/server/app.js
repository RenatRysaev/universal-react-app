import '@babel/polyfill';
import express from 'express';
import { resolve } from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { matchPath, StaticRouter } from 'react-router-dom'
import routes from 'config/routes'
import configureStore from 'config/store';
import App from 'shared/App'
import {
  getComponentsWithFetch,
  fetchComponentsData,
  getFullPage,
} from './utils';


const app = express();

app.use(express.static(resolve('dist/')));

app.get('/*', async (req, res) => {
  console.log('REQUEST', req.url)
  const store = configureStore();
  const context = {};
  const componentsWithFetch = getComponentsWithFetch(routes, req.url, matchPath);

  await fetchComponentsData(
    store.dispatch,
    componentsWithFetch,
    {},
  );

  const initialState = store.getState();

  const componentHTML = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const fullPage = getFullPage(
    componentHTML,
    initialState,
  );

  res.send(fullPage);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`SERVER STARTED, http://localhost:${PORT}/`));
