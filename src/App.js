import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoItemsList from './components/TodoItemsList'

class App extends Component {

  takeItemNameFromInputBox = () => {
    let inputField = this.refs.TodoInput.refs.inputField;
    let itemName = inputField.value;
    inputField.value = "";
    return itemName;
  }

  addItem = () => {
    let itemName = this.takeItemNameFromInputBox();
    if (itemName !== "") {
      this.refs.TodoItemsList.receiveNewItem(itemName);
    }
  }

  render() {
    return (
      <div>
          <TodoInput addItem={this.addItem} ref="TodoInput" />
          <TodoItemsList ref="TodoItemsList"/>
      </div>
    );
  }
}

export default App;
