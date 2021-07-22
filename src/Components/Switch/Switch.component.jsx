import React, { useState } from "react";
import styles from "./Switch.module.css";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

export default function Switch({ onChange, color, variant }) {
	const [clicked, setClicked] = useState(false);

	return (
		<div
			className={classNames({
				[styles.switch]: true,
				[styles.switchBackgroundClicked]: clicked,
			})}
			onClick={(e) => {
				setClicked(!clicked);
				onChange && onChange(clicked);
			}}
			style={
				clicked
					? {
							backgroundColor: typeToColorMapping({color,colorOpacity:0.5})
								.backgroundColor,
					  }
					: {}
			}
		>
			<div
				className={classNames({
					[styles.switchCircle]: true,
					[styles.switchClicked]: clicked,
				})}
				style={
				clicked
					? {
							backgroundColor: typeToColorMapping({color})
								.backgroundColor,
					  }
					: {}
			}
			></div>
		</div>
	);
}

Switch.propTypes = {
	color: PropTypes.oneOf([
		"primary",
		"success",
		"warning",
		"danger",
		"default",
	]),
};

Switch.defaultProps = {
	color: "default",
};
