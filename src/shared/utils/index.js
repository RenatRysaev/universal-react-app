import { reduce } from 'lodash';


export const callActionCreators = (dispatch, params, actionCreators = []) => (
  Promise.all(
    actionCreators.map(actionCreator => dispatch(actionCreator(params))),
  )
);

export const normalizeParamsForFetch = (params = {}) => (
  reduce(params, (acc, param, key) => ({
    ...acc,
    [key]: param,
  }), {})
);
