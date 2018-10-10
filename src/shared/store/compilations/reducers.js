import { createReducer } from 'redux-act';

import {
  actionGetCompilations,
  actionGetCompilationsSucceed,
  actionGetCompilationsFail,
} from './actions';


const initialState = {
  compilations: [],
  isLoading: false,
  error: null,
};

const compilationsReducer = createReducer({

  [actionGetCompilations]: state => ({ ...state, isLoading: true }),

  [actionGetCompilationsSucceed]: (state, compilations) => ({ ...state, isLoading: false, compilations }),

  [actionGetCompilationsFail]: (state, error) => ({ ...state, isLoading: false, error }),

}, initialState);

export default compilationsReducer;
