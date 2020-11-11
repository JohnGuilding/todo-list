import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    return (
      <>
        <h2 className={styles.header}>JOHN'S TODO LIST</h2>
      </>
    );
  }
}

export default Header;
