import React, { Component } from 'react';

import { connectDataFetchers } from 'hoc/connectDataFetchers';


class Compilations extends Component {
  render () {
    return (
      <div>Compilations container</div>
    );
  }
}

// export default connectDataFetchers(Compilations, [getCompilations]);

export default Compilations;
