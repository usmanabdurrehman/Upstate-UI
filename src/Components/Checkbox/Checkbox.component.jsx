import React, { useState, useEffect, useRef } from "react";

import styles from "./Checkbox.module.css";
import globalStyles from 'styles/global.module.css'

import Check from "./Check.svg";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

import InputBase from '../InputBase/InputBase.component'

// Have to check the condition placed for checked

// Have to do something to make it required through a prop

// Have to have a class for the checkmark

export default function Checkbox({ color, value, disabled, classes, required, onChange }) {
	let [isChecked, setIsChecked] = useState(value || null);

	const mounted = useRef();

	useEffect(() => {
		if (!mounted.current) {
			// do componentDidMount logic
			mounted.current = true;
		} else {
			setIsChecked(value);
		}
	}, [value]);

	return (
		<div
			className={classNames({
				[styles.checkbox]: true,
				[typeToColorMapping({ color })]: value ? value && isChecked : isChecked,
				[styles.removeBorder]:value ? value && isChecked : isChecked,
				[globalStyles.disabled]: disabled,
				[classes?.checkbox]:classes?.checkbox
			})}
			onClick={(e) => {
				!disabled && onChange &&
					onChange(!(value ? value && isChecked : isChecked));
				!disabled &&
					setIsChecked(!(value ? value && isChecked : isChecked));
			}}
		>
			<img src={Check} className={styles.check} alt="Check mark" />
			{required && <InputBase value={isChecked}/>}
		</div>
	);
}

Checkbox.propTypes = {
	color: PropTypes.oneOf([
		"primary",
		"success",
		"warning",
		"danger",
		"default",
	]),
	value: PropTypes.bool,
	disabled: PropTypes.bool,
	required:PropTypes.bool,
	onChange: PropTypes.func,
  	classes:PropTypes.object
};

Checkbox.defaultProps = {
	color: "default",
	disabled: false,
	required:false
};
