import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    return (
      <div>
        <input type="text" name="todo-item-input"/>
        <button>Add Item</button>
      </div>
    );
  }
}

export default TodoInput;
