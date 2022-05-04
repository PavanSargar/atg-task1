import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${styles.header} `}>
      <div className={`${styles.content} section-padding`}>
        <h2>Computer Engineering</h2>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default Header;
