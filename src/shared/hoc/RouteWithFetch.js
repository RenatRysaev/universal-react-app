import * as React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


class RouteWithFetch extends React.Component {
  // static fakePropTypes = {
  //   Component: 'react component',
  //   fetchData: 'func',
  //   path: 'string',
  //   exact: 'bool',
  //   fetchActions: 'array of func'
  // }

  // TODO - не запрашивать данные, если страница отрендерилась на сервере
  // потому что данные уже фетчятся на сервере и повторно фетчить их на клиенте нет смысла
  componentDidMount() {
    const {
      fetchData,
      dispatch,
      computedMatch,
    } = this.props;

    fetchData(dispatch, computedMatch.params);
  }

  render() {
    return (
      <Route {...this.props} />
    );
  }
}

export default connect()(RouteWithFetch);
