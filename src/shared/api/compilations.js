export const getCompilations = () => (
  new Promise((res, rej) => {
    setTimeout(() => res([
      { id: 0, name: 'compilations_1' },
      { id: 1, name: 'compilations_2' },
      { id: 2, name: 'compilations_3' },
      { id: 3, name: 'compilations_4' },
      { id: 4, name: 'compilations_5' },
    ]), 1000)
  })
);
