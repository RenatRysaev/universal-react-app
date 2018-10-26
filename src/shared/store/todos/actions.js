import { createAction } from 'redux-act';

export const actionGetTodos = createAction('store/GET_TODOS');
export const actionGetTodosSucceed = createAction('store/GET_TODOS_SUCCEED');
export const actionGetTodosFail = createAction('store/GET_TODOS_FAIL');
