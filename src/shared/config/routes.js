import Loadable from 'react-loadable';
import Loader from 'components/Loader';

import { getCompilations } from 'store/compilations/thunks';

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
    path: '/compilations',
    component: Loadable({
      loader: () => import('pages/CompilationsPage'),
      loading: Loader,
    }),
    exact: true,
    // TODO - создать уттилиту (example createFetchDataFunction),
    // которая будет принимать массив из actionCreators
    // и под катом диспатчить их и ждать пока все данные зафетчятся
    fetchData: (dispatch, params) => (
      Promise.all(
        [getCompilations].map(actionCreator => dispatch(actionCreator(params)))
      )
    ),
  },
];

export default routes;
