export const getTodos = () => (
  new Promise((res, rej) => {
    setTimeout(() => res([
      { id: 0, name: 'Сделать то' },
      { id: 1, name: 'Сделать сё' },
      { id: 2, name: 'Сходить в магазин' },
      { id: 3, name: 'Почитаь книгу' },
    ]), 1000)
  })
);
