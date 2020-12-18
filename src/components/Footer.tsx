import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div id={styles.Footer}>
      <div id={styles.contactIcons}>Github LinkedIn</div>
      <div id={styles.contactEmail}>
        <a href="mailto:replaceThisWith-first.last@gmail.com">
          first.last@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
