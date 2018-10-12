import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

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

export default connect()(CompilationsPage)
