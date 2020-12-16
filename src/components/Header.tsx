import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.appHeader}>
      <h1>Tommi Saarikangas</h1>
      <h2>Developer and Designer</h2>
    </header>
  );
};

export default Header;
