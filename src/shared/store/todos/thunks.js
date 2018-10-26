import API from 'shared/api'

import {
  actionGetTodosSucceed,
  actionGetTodosFail,
} from './actions';


export const thunkGetTodos = () => async (dispatch) => {
  try {
    const response = await API.getTodos();
    dispatch(actionGetTodosSucceed(response))
  } catch (err) {
    dispatch(actionGetTodosFail(err))
  }
};
