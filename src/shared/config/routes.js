import HomePage from 'pages/HomePage';
import CompilationsPage from 'pages/CompilationsPage';


const routes = [
  {
    path: '/',
    strict: false,
    component: HomePage,
    exact: true,
  },
  {
    path: '/compilations',
    strict: false,
    component: CompilationsPage,
    exact: true,
  },
];

export default routes;
