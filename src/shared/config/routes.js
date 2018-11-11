import Loadable from 'react-loadable';
import Loader from 'components/Loader';

import { thunkGetTodos } from 'store/todos/thunks'
import { thunkGetSingleTodo } from "store/singleTodo/thunks";
import { callActionCreators } from 'shared/utils';


const routes = [
  {
    path: '/',
    component: Loadable({
      loading: Loader,
      loader: () => import('pages/HomePage'),
    }),
    exact: true,
  },
  {
    path: '/todos',
    component: Loadable({
      loading: Loader,
      loader: () => import('pages/TodosPage')
    }),
    exact: true,
    fetchData: (dispatch, params) => callActionCreators(dispatch, params, [thunkGetTodos]),
  },
  {
    path: '/todos/:id',
    component: Loadable({
      loading: Loader,
      loader: () => import('pages/TodoDetailCartPage')
    }),
    exact: true,
    fetchData: (dispatch, params) => callActionCreators(dispatch, params, [thunkGetSingleTodo]),
  },
];

export default routes;
