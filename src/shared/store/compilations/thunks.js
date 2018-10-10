import API from 'api';
import {
  actionGetCompilations,
  actionGetCompilationsSucceed,
  actionGetCompilationsFail,
} from './actions';

export const getCompilations = () => async (dispatch) => {
  try {
    dispatch(actionGetCompilations());

    const response = await API.getCompilations();

    dispatch(actionGetCompilationsSucceed(response));
  } catch (err) {
    dispatch(actionGetCompilationsFail(err));
  }
};
