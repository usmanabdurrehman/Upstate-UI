import React from "react";
import styles from "./Alert.module.css";

import { typeToColorMapping } from "utils";

import ClearIcon from "@material-ui/icons/Clear";

import PropTypes from "prop-types";

import { classNames, returnDefault } from "utils";

export default function Alert({ color, text, showAlert, classes }) {

	return (
		<div className={classNames({
				[styles.alertWrapper]:true,
			})}>
			<div
				className={classNames({
					[styles.alert]: true,
					[styles.showAlert]:showAlert,
					[styles[`alert-${returnDefault({color})}`]]:true,
					[classes?.alert]: classes?.alert,
				})}
			>
				<p>{text}</p>
				<ClearIcon className={styles.icon} />
			</div>
		</div>			
	);
}

Alert.propTypes = {
	color: PropTypes.oneOf([
		"primary",
		"success",
		"warning",
		"danger",
		"default",
	]),
	text: PropTypes.string,
	showAlert:PropTypes.bool,
  	classes:PropTypes.object
};

Alert.defaultProps = {
	color: "default",
	showAlert:false
};
