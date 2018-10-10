import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'config/routes';


const App = () => (
  <Switch>
    {routes.map(route => (
      <Route {...route} key={route.path} />
    ))}
  </Switch>
);

export default App;
