import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoItemsList from './components/TodoItemsList'

class App extends Component {
  state = {itemsList: ['item1', 'item2', 'item3']}



  render() {
    return (
      <div>
          <TodoInput />
          <TodoItemsList itemsList={this.state.itemsList}/>
      </div>
    );
  }
}

export default App;
