import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu: React.FC = () => (
  <nav className={styles.menu}>
    <Link className={styles.link} to="/">
      Home
    </Link>
    <Link className={styles.link} to="/about">
      About
    </Link>
  </nav>
);

export default Menu;
