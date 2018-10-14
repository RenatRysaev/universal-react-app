export const fetchComponentsData = (actionCreators = [], dispatch, params) => (
  Promise.all(
    actionCreators.map(actionCreator => dispatch(actionCreator(params))),
  )
);
