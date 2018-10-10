import React from 'react';
import { Link } from 'react-router-dom'

// import connectDataFetchers from 'hoc/connectDataFetchers';


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
