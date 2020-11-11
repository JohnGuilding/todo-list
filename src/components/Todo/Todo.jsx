import React, { Component } from "react";
import styles from "./Todo.module.scss";

class Todo extends Component {
  render() {
    return (
      <>
        <p>{this.props.content}</p>
        <button>Delete</button>
      </>
    );
  }
}

export default Todo;
