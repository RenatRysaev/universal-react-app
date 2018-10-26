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
  // смотреть в сторону различия пропсов, так как с сервера вроде приходят какие-то доп пропсы
  componentDidMount() {
    const {
      fetchData,
      dispatch,
      computedMatch,
    } = this.props;

    if (fetchData) {
      fetchData(dispatch, computedMatch.params);
    }
  }

  render() {
    // console.log('RouteWithFetch props', this.props);
    const { component: Component } = this.props;
    return (
      <Route
        render={(props) => (
          <Component onClick={console.log('route props', props)} {...props} {...this.props} />
        )}
      />
    );
  }
}

export default connect()(RouteWithFetch);
