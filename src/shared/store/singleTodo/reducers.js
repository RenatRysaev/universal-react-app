import { createReducer } from "redux-act";
import {
  actionGetSingleTodo,
  actionGetSingleTodoFail,
  actionGetSingleTodoSucceed,
} from "./actions";


const initialState = {
  data: null,
  isLoading: false,
};

const singleTodoReducer = createReducer({
  [actionGetSingleTodo]: state => ({ ...state, isLoading: true }),

  [actionGetSingleTodoSucceed]: (state, singleTodo) => ({ ...state, data: singleTodo, isLoading: false }),

  [actionGetSingleTodoFail]: (state, singleTodo) => ({ ...state, isLoading: false }),

}, initialState);

export default singleTodoReducer;
