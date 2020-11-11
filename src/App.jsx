import React, { Component } from 'react';
import styles from "./App.css";
import Header from './components/Header';
import TodoList from './components/TodoList';

class App extends Component {

  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  }

  render() {
    return (
      <div class="container">
        <Header todos={this.state.tasks.length} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
