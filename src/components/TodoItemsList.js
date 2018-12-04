import React, { Component } from 'react';

class TodoItemsList extends Component {
  state = {itemsList: []};
  
  receiveNewItem = (itemName) => {
    this.state.itemsList.push(itemName);
    this.setState(this.state);
  }

  render() {
    return (
      <ul>
          {this.state.itemsList.map((itemName) => (<li>{itemName}</li>))}
      </ul>
    );
  }
}

export default TodoItemsList;
