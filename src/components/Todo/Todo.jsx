import React, { Component } from "react";
import styles from "./Todo.module.scss";

class Todo extends Component {
  render() {
    return (
      <>
        <div className={styles.todo}>
          <div>{this.props.content}</div>
          <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
        </div>
      </>
    );
  }
}

export default Todo;
