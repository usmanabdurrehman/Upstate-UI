import React, { useState } from "react";
import styles from "./FAB.module.css";

import PropTypes from 'prop-types';

import { classNames, typeToColorMapping } from "utils";

export default function FAB({ children, type, variant, onClick }) {
	const [clicked, setClicked] = useState(false);

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
			onAnimationEnd={() => {
				setClicked(false);
			}}
			style={typeToColorMapping(type,variant)}
		>
			{children}
		</button>
	);
}

FAB.propTypes = {
  type: PropTypes.oneOf(['primary', 'success', 'warning','danger','default']),
  variant:PropTypes.oneOf(['filled', 'outlined'])
};

FAB.defaultProps = {
  type:"default",
  variant:"outlined",
  children:"+"
};