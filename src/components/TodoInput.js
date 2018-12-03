import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    return (
      <div>
        <input type="text" ref="inputField"/>
        <button onClick = {this.props.addItem} >Add Item</button>
      </div>
    );
  }
}

export default TodoInput;
