import { combineReducers } from 'redux';

import todosReducer from 'store/todos/reducers';


const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
