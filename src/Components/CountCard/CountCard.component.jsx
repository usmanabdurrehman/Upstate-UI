import React from "react";
import styles from "./CountCard.module.css";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

export default function CountCard({
	number,
	text,
	color,
	width,
	height,
	type,
}) {
	return (
		<div className={styles.card} style={{ width, height }}>
			<div
				className={styles.hoverLineTop}
				style={{
					backgroundColor:
						color || typeToColorMapping({ type }).backgroundColor,
				}}
			></div>
			<div className={styles.gridChild}>
				<h1>{number}</h1>
			</div>
			<div className={styles.gridChild}>{text}</div>
		</div>
	);
}

CountCard.propTypes = {
	type: PropTypes.oneOf([
		"primary",
		"success",
		"warning",
		"danger",
		"default",
	]),
	color: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	number: PropTypes.number,
	text: PropTypes.string,
};

CountCard.defaultProps = {
	type: "default",
	width: 250,
	height: 150,
	number: 30,
	text: "Orders Completed",
};
