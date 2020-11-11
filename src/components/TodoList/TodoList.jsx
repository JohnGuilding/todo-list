import React, { Component } from "react";
import styles from "./TodoList.module.scss";
import Todo from "./../Todo";

class TodoList extends Component {
  render() {
    return (
      <>
        {this.props.tasks.map((todo, index) => {
          return <Todo content={todo} key={index} id={index} />
        })}
      </>
    );
  }
}

export default TodoList;
