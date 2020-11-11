import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {

  state = {
    name: ""
  }

  componentDidMount() {
    fetch("https://api.randomuser.me/")
    .then((response) => response.json())
    .then((response) => {
      this.setState({name: response.results[0].name.first});
    });
  }
  

  render() {
    return (
      <>
        <h2 className={styles.header}>{`${this.state.name}'s Todo List`}</h2>
      </>
    );
  }
}

export default Header;
