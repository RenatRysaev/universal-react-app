import { createAction } from "redux-act";


export const actionGetSingleTodo = createAction('store/singleTodo/GET_SINGLE_TODO');
export const actionGetSingleTodoSucceed = createAction('store/singleTodo/GET_SINGLE_TODO_SUCCEED');
export const actionGetSingleTodoFail = createAction('store/singleTodo/GET_SINGLE_TODO_FAIL');
