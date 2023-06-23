import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Container } from "..";
import classNames from "classnames";

import { IconButton } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { Classes } from "../../types";

interface NavbarProps {
  logo: React.ReactNode;
  menuItems: React.ReactNode[];
  classes?: Classes;
}

export default function Navbar({ logo, menuItems, classes }: NavbarProps) {
  let [sidebarOpen, setSidebarOpen] = useState(false);

  let clickHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.navbar}>
      <Container classes={{ container: styles.navbarWrapper }}>
        <h2 className={styles.logo}>{logo}</h2>
        <div className={styles.menuItems}>
          {menuItems.map((item) => (
            <div className={styles.menuItem}>{item}</div>
          ))}
        </div>
        <IconButton className={styles.hamburger} onClick={clickHandler}>
          {sidebarOpen ? (
            <CloseIcon className={styles.menuIcon} />
          ) : (
            <MenuIcon className={styles.menuIcon} />
          )}
        </IconButton>
      </Container>
      <div
        className={classNames({
          [styles.sidebar]: true,
          [styles.sidebarOpen]: sidebarOpen,
        })}
      >
        {menuItems.map((item) => (
          <div className={styles.menuItem}>{item}</div>
        ))}
      </div>
    </div>
  );
}
