import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header id={styles.Header}>
      <h1>Tommi Saarikangas</h1>
      <h2>Developer and Designer</h2>
    </header>
  );
};

export default Header;
