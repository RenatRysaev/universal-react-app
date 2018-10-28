import '@babel/polyfill';
import http from 'http';
import { resolve } from 'path';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { matchPath, StaticRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import routes from 'config/routes';
import configureStore from 'config/store';
import App from 'shared/App';
import stats from 'dist/react-loadable.json';
import {
  getComponentsWithFetch,
  fetchComponentsData,
  getFullPage,
} from './utils';


const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpackConfig = require('../../webpack/client.dev');
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
  }));
  app.use(webpackHotMiddleware(compiler));
}

routes.forEach(({ path }) => app.use(path, express.static(resolve('dist/'))));

app.get('/*', async (req, res) => {
  const modules = [];
  const context = {};
  const store = configureStore();
  const componentsWithFetch = getComponentsWithFetch(routes, req.url, matchPath);

  await fetchComponentsData(
    store.dispatch,
    componentsWithFetch,
    {},
  );

  const initialState = store.getState();

  const componentHTML = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </Loadable.Capture>
  );

  const bundles = getBundles(stats, modules);

  const fullPage = getFullPage(
    componentHTML,
    initialState,
    bundles,
  );

  res.send(fullPage);
});

const server = http.createServer(app);

Loadable.preloadAll().then(() => {
  const PORT = process.env.PORT || 3001;

  server.listen(PORT, () => console.log(`SERVER STARTED, http://localhost:${PORT}/`));
});
