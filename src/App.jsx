import React, { Component } from 'react';
import styles from "./App.css";
import Header from './components/Header';
import TodoList from './components/TodoList';
import SubmitForm from './components/SubmitForm';

class App extends Component {

  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  }

  handleDelete = (index) => {
    const newArray = [...this.state.tasks];
    newArray.splice(index, 1);
    this.setState({tasks: newArray});
  }

  handleSubmit = (task) => {
    this.setState({tasks: [...this.state.tasks, task]})
  }

  render() {
    return (
      <div class="container">
        <Header todos={this.state.tasks.length} />
        <SubmitForm onFormSubmit={this.handleSubmit} />
        <TodoList 
          tasks={this.state.tasks}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
