import React from 'react';
import { Link } from 'react-router-dom'

import { getCompilations } from 'store/compilations/thunks';

import connectDataFetchers from 'hoc/connectDataFetchers';


class CompilationsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Compilations page</h1>
        <Link to="/">go to home</Link>
      </div>
    )
  }
}

export default connectDataFetchers(CompilationsPage, [getCompilations]);
