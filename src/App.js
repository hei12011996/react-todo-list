import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoItemsList from './components/TodoItemsList'

class App extends Component {
  state = {itemsList: []}

  addItem = () => {
    let inputField = this.refs.TodoInput.refs.inputField;
    let inputValue = inputField.value;
    inputField.value = "";
    this.state.itemsList.push(inputValue);
    this.setState(this.state);
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
