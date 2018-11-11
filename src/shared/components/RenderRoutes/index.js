import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithFetch from 'hoc/RouteWithFetch';


const RenderRoutes = ({ routes = [] }) => (
  <Switch>
    {routes.map(({ component: Component, path, exact, fetchData }) => (
      <RouteWithFetch
        key={path}
        component={Component}
        path={path}
        exact={exact}
        fetchData={fetchData}
      />
    ))}
  </Switch>
);

export default RenderRoutes;
