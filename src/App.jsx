import React, { Component } from 'react';
import styles from "./App.module.scss";
import Header from './components/Header';
import TodoList from './components/TodoList';
import SubmitForm from './components/SubmitForm';

class App extends Component {

  state = {
    tasks: []
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
      <div className={styles.container}>
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
