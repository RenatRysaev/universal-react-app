import { createSelector } from 'reselect'


export const selectTodos = state => state.todos;

export const selectTodosList = createSelector(
  selectTodos,
  todos => todos.todoList,
);
