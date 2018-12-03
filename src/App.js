import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoItemsList from './components/TodoItemsList'

class App extends Component {
  render() {
    return (
      <div>
          <TodoInput />
          <TodoItemsList />
      </div>
    );
  }
}

export default App;
