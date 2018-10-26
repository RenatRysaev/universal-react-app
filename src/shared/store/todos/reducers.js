import { createReducer } from 'redux-act';

import {
  actionGetTodos,
  actionGetTodosSucceed,
  actionGetTodosFail,
} from './actions';


const initialState = {
  todoList: [],
  isLoading: false,
  error: null,
};

const todosReducer = createReducer({

  [actionGetTodos]: state => ({ ...state, isLoading: true }),

  [actionGetTodosSucceed]: (state, todoList) => ({ ...state, isLoading: false, todoList }),

  [actionGetTodosFail]: (state, error) => ({ ...state, isLoading: false, error }),

}, initialState);

export default todosReducer;
