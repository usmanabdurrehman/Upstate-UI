import React, { useState } from "react";
import styles from "./Checkbox.module.css";

import Check from "./Check.svg";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

export default function Checkbox({ type }) {
	let [checked, setChecked] = useState(false);

	return (
		<div
			className={classNames({
				[styles.checkbox]: true,
			})}
			onClick={(e) => setChecked(!checked)}
			style={
				checked
					? {
							border: 'none',
							backgroundColor: typeToColorMapping({type}).backgroundColor,
					  }
					: {}
			}
		>
			<img src={Check} className={styles.check} />
		</div>
	);
}

Checkbox.propTypes = {
	type: PropTypes.oneOf([
		"primary",
		"success",
		"warning",
		"danger",
		"default",
	])
};

Checkbox.defaultProps = {
	type: "default"
};
