import React, { Component } from 'react';

class TodoItemsList extends Component {
  state = {itemList: ['a', 'b', 'c']};

  render() {
    return (
      <ul>
          {this.state.itemList.map((itemName) => (<li>{itemName}</li>))}
      </ul>
    );
  }
}

export default TodoItemsList;
