import React, { useState } from "react";
import styles from "./Button.module.css";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

export default function Button({ children, type, variant, size, onClick }) {
	const [clicked, setClicked] = useState(false);

	let typeToSizeMapper = (size) => {
		let typeToSizeMapper = {
			small: {
				fontSize: "13px",
				padding: "4px 10px",
			},
			medium: {
				fontSize: "14px",
				padding: "6px 16px",
			},
			large: {
				fontSize: "15px",
				padding: "8px 22px",
			},
		};
		return typeToSizeMapper[size] || typeToSizeMapper.small;
	};

	return (
		<button
			onClick={() => {
				setClicked(true);
				onClick && onClick();
			}}
			className={classNames({
				[styles.button]: true,
				[styles.buttonAnimation]: clicked,
			})}
			style={{
				...typeToColorMapping({ type, variant }),
				...typeToSizeMapper(size),
			}}
			onAnimationEnd={() => {
				setClicked(false);
			}}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.oneOf([
		"primary",
		"success",
		"warning",
		"danger",
		"default",
	]),
	variant: PropTypes.oneOf(["filled", "outlined"]),
	size:PropTypes.oneOf(['small','medium','large'])
};

Button.defaultProps = {
	type: "default",
	variant: "outlined",
	children: "default",
	size:'small'
};
