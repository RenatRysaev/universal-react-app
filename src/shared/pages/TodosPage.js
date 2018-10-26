import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { selectTodosList } from 'store/todos/selectors';

import Menu from 'containers/Menu';


const mapStateToProps = state => ({
  todoList: selectTodosList(state),
})

const mapDispatchToProps = {
  changeLocation: push,
}

class TodosPage extends Component {
  handleTodoItemClick = (id) => {
    const { path, changeLocation } = this.props;
    changeLocation(`${path}/${id}`);
  }

  render () {
    const { todoList } = this.props
    return (
      <div>
        <Menu />
        <h1>Todos page</h1>

        <ul>
          {todoList.map(({ id, name }) => (
            <li
              key={id}
              onClick={() => this.handleTodoItemClick(id)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(TodosPage)
