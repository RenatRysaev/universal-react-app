import { createAction } from 'redux-act';

export const actionGetCompilations = createAction('store/compilations/GET_COMPILATIONS');
export const actionGetCompilationsSucceed = createAction('store/compilations/GET_COMPILATIONS_SUCCEED')
export const actionGetCompilationsFail = createAction('store/compilations/GET_COMPILATIONS_FAIL')

