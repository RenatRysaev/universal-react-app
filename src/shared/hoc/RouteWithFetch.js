import * as React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { normalizeParamsForFetch } from "utils";


class RouteWithFetch extends React.Component {
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
      fetchData(
        dispatch,
        normalizeParamsForFetch(computedMatch.params),
      );
    }
  }

  render() {
    const { component: Component } = this.props;
    return (
      <Route
        render={(props) => (
          <Component
            {...props}
            {...this.props}
          />
        )}
      />
    );
  }
}

export default connect()(RouteWithFetch);
