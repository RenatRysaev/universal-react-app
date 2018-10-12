import React from 'react';
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <Link to="/compilations">go to compilations</Link>
      </div>
    );
  }
}

export default HomePage;
