export const getRoutesWithFetch = (routes = [], reqUrl, compareRoute) => (
  routes.filter(route => compareRoute(reqUrl, route) && route.fetchData)
);

export const fetchInitialData = (dispatch, components, params) => {
  return Promise.all(
    components.map(component => component.fetchData(dispatch, params))
  )
};

export const getFullPage = (
  html,
  preloadedState = {},
  bundles = [],
) => (
  `<!doctype html>
  <html>
    <head>
      <link rel="shortcut icon" href="/static/favicon.ico"/>
      <title>Server</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/client.bundle.js"></script>
      ${bundles.map(bundle => `<script src="/${bundle.file}"></script>`)}
    </body>
  </html>`
);
