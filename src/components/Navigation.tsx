import React from "react";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.navBar}>
      <button className={styles.selected}>Home</button>
      <button>Projects</button>
      <button>About</button>
      <button>Contact</button>
    </nav>
  );
};

export default Navigation;
