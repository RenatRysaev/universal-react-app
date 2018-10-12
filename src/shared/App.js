import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'config/routes';
import RouteWithFetch from 'hoc/RouteWithFetch';


// TODO - создать утилиту(renderRoutes), которая будет рендерить актуальные роуты(типо renderRoutes(routes))
const App = () => (
  <Switch>
    {routes.map(({ component: Component, path, exact, fetchData }) => (
      fetchData
      ?
        <RouteWithFetch
          key={path}
          component={Component}
          path={path}
          exact={exact}
          fetchData={fetchData}
        />
      :
        <Route
          key={path}
          path={path}
          exact={exact}
        />
    ))}
  </Switch>
);

export default App;
