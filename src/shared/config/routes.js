import Loadable from 'react-loadable';
import Loader from 'components/Loader';

import { getCompilations } from 'store/compilations/thunks';

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
    path: '/compilations',
    component: Loadable({
      loader: () => import('pages/CompilationsPage'),
      loading: Loader,
    }),
    exact: true,
    fetchData: (dispatch, params) => fetchComponentsData([getCompilations], dispatch, params),
  },
];

export default routes;
