import API from 'shared/api'
import {
  actionGetSingleTodoFail,
  actionGetSingleTodoSucceed,
} from "./actions";


export const thunkGetSingleTodo = ({ id }) => async (dispatch) => {
  try {
    const response = await API.getSingleTodo(id);
    dispatch(actionGetSingleTodoSucceed(response));
  } catch (e) {
    dispatch(actionGetSingleTodoFail());
  }
};
