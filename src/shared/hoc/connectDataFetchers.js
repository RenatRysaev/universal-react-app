import * as React from 'react';

const connectDataFetchers = (Component, actionCreators = []) => (
  class DataFetchersWrapper extends React.Component {
    static fetchData(dispatch, params) {
      return Promise.all(
        actionCreators.map(actionCreator => dispatch(actionCreator(params))),
      );
    }

    // componentDidMount() {
    //   const { dispatch, params } = this.props;
    //   DataFetchersWrapper.fetchData(dispatch, params);
    // }

    render() {
      return (
        <Component {...this.props} />
      );
    }
  }
);

export default connectDataFetchers;
