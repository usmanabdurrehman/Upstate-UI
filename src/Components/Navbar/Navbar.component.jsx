import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Container } from "../";
import { classNames } from "utils";

import { IconButton } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export default function Navbar({ logo, menuItems, bgColor }) {
	let [sidebarOpen, setSidebarOpen] = useState(false);

	let clickHandler = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<div className={styles.navbar}>
			<Container className={styles.navbarWrapper}>
				<div className={styles.logo}>
					<h2>{logo}</h2>
				</div>
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
