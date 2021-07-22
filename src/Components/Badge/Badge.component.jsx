import React from "react";

import styles from "./Badge.module.css";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping, isEmpty } from "utils";

export default function Badge({
	color,
	number,
	max,
	invisible,
	showZero,
	children,
}) {
	if (!number) {
		throw new Error("A number must be supplied for displaying the badge");
	}

	return (
		<div className={styles.badgeWrapper}>
			{!invisible && (number == 0 ? showZero : true) && (
				<div
					className={styles.badge}
					style={{
						backgroundColor: typeToColorMapping({ color })
							.backgroundColor,
					}}
				>
					<div>{Math.min(number, max)}</div>
				</div>
			)}
			<div className={styles.badgeContent}>{children}</div>
		</div>
	);
}

Badge.propTypes = {
	color: PropTypes.oneOf([
		"primary",
		"success",
		"warning",
		"danger",
		"default",
	]),
	badge: PropTypes.number,
	max: PropTypes.number,
	showZero: PropTypes.bool,
	invisible: PropTypes.bool,
};

Badge.defaultProps = {
	color: "default",
	max: 99,
	showZero: false,
	invisible: false,
};
