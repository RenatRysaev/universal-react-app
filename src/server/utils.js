export const getComponentsWithFetch = (routes = [], reqUrl, compareRoute) => (
  routes
    .filter(route => compareRoute(reqUrl, route))
    .map(route => route.component)
    .filter(component => component.fetchData)
);

export const fetchComponentsData = (dispatch, components, params) => {
  const promises = components.map(current => {
    const component = current.WrappedComponent ? current.WrappedComponent : current;

    return component.fetchData
      ? component.fetchData(dispatch, params)
      : null;
  });

  return Promise.all(promises);
}

export const getFullPage = (
  html,
  preloadedState,
  staticUrl,
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
      <script type="application/javascript" src="http://localhost:8050/assets/build/client.js"></script>
    </body>
  </html>`
);
