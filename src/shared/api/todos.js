import DB from "./DB";

export const getTodos = () => (
  new Promise((resolve, rej) => {
    setTimeout(() => resolve(DB.TODOS), 1000)
  })
);
