import React, { useState, useEffect } from "react";
import styles from "./BottomNavigation.module.css";

import { classNames, typeToColorMapping } from "utils";

import PropTypes from "prop-types";

export default function BottomNavigation({
	children,
	active: activeProp,
	classes,
	color,
}) {
	const [active, setActive] = useState(activeProp);

	useEffect(() => {
		setActive(activeProp);
	}, [activeProp]);

	return (
		<div
			className={classNames({
				[styles.bottomNavigation]: true,
				[classes?.bottomNavigation]: classes?.bottomNavigation,
			})}
		>
			{children.map((child, index) => (
				<div
					className={classNames({
						[styles.navMenu]: true,
						[typeToColorMapping({ color })]: true,
						[styles.active]: index == active,
						[classes?.navMenu]: classes?.navMenu,
						[classes?.active]: classes?.active,
					})}
					onClick={(e) => {
						setActive(index);
					}}
				>
					{child}
				</div>
			))}
		</div>
	);
}

BottomNavigation.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node),
	active: PropTypes.number,
	classes: PropTypes.object,
	color: PropTypes.oneOf([
		"primary",
		"success",
		"warning",
		"danger",
		"default",
	]),
};

BottomNavigation.defaultProps = {
	active: 0,
	color: "default",
};
