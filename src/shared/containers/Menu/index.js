import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { menuList } from './constants';


const Menu = ({ changeLocation }) => (
  <ul>
    {menuList.map(({ name, path }) => (
      <li
        key={path}
        onClick={() => changeLocation(path)}
        style={{ cursor: 'pointer' }}
      >
        {name}
      </li>
    ))}
  </ul>
)

export default compose(
  connect(null, { changeLocation: push }),
)(Menu)
