import Loadable from 'react-loadable';
import Loader from 'components/Loader';

import { thunkGetTodos } from 'store/todos/thunks'

import { fetchComponentsData } from 'shared/utils';


const routes = [
  {
    path: '/',
    component: Loadable({
      loader: () => import('pages/HomePage'),
      loading: Loader,
    }),
    exact: true,
  },
  {
    path: '/todos',
    component: Loadable({
      loader: () => import('pages/TodosPage'),
      loading: Loader,
    }),
    exact: true,
    // TODO поменять параметры местами у ф-ии (fetchComponentsData)
    fetchData: (dispatch, params) => fetchComponentsData([thunkGetTodos], dispatch, params),
  },
  {
    path: '/todos/:id',
    component: Loadable({
      loader: () => import('pages/TodoDetailCartPage'),
      loading: Loader,
    }),
    exact: true,
    fetchData: (dispatch, params) => fetchComponentsData([thunkGetTodos], dispatch, params),
  },
];

export default routes;
