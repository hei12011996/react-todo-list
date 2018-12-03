import React, { Component } from 'react';

class TodoItemsList extends Component {
  state = {itemsList: this.props.itemsList};

  render() {
    return (
      <ul>
          {this.state.itemsList.map((itemName) => (<li>{itemName}</li>))}
      </ul>
    );
  }
}

export default TodoItemsList;
