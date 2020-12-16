import React from "react";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.navBar}>
      <a href="#">Home</a>
      <a href="#">Projects</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  );
};

export default Navigation;
