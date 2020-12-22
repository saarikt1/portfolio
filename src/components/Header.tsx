import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header id={styles.Header}>
      <h1>Tommi Saarikangas</h1>
      <h2>Developer and UX designer</h2>
    </header>
  );
};

export default Header;
