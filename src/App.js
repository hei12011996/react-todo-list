import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoItemsList from './components/TodoItemsList'

class App extends Component {
  state = {itemsList: []}

  takeItemNameFromInputBox = () => {
    let inputField = this.refs.TodoInput.refs.inputField;
    let itemName = inputField.value;
    inputField.value = "";
    return itemName;
  }

  addItem = () => {
    let itemName = this.takeItemNameFromInputBox();
    if (itemName !== "") {
      this.state.itemsList.push(itemName);
      this.setState(this.state);
    }
  }

  render() {
    return (
      <div>
          <TodoInput addItem={this.addItem} ref="TodoInput" />
          <TodoItemsList itemsList={this.state.itemsList}/>
      </div>
    );
  }
}

export default App;
