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

export default function Checkbox({ color, checked, disabled, classes, required, onChange }) {
	let [isChecked, setIsChecked] = useState(checked || null);

	const mounted = useRef();

	useEffect(() => {
		if (!mounted.current) {
			// do componentDidMount logic
			mounted.current = true;
		} else {
			setIsChecked(!(checked ? checked && isChecked : isChecked));
		}
	}, [checked]);

	return (
		<div
			className={classNames({
				[styles.checkbox]: true,
				[typeToColorMapping({ color })]: checked ? checked && isChecked : isChecked,
				[styles.removeBorder]:checked ? checked && isChecked : isChecked,
				[globalStyles.disabled]: disabled,
				[classes?.checkbox]:classes?.checkbox
			})}
			onClick={(e) => {
				onChange &&
					onChange(checked ? checked && isChecked : isChecked);
				!disabled &&
					setIsChecked(!(checked ? checked && isChecked : isChecked));
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
	checked: PropTypes.bool,
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
