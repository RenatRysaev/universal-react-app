import React from 'react';
import routes from 'config/routes';
import RenderRoutes from 'components/RenderRoutes';


const App = () => (
  <RenderRoutes routes={routes} />
);

export default App;
