import { combineReducers } from 'redux';

import todosReducer from 'store/todos/reducers';
import singleTodoReducer from "store/singleTodo/reducers";


const rootReducer = combineReducers({
  todos: todosReducer,
  singleTodo: singleTodoReducer,
});

export default rootReducer;
