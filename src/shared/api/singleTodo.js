import DB from "./DB";


export const getSingleTodo = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(DB.TODOS.find(todos => Number(todos.id) === Number(id))), 1000);
  })
};
