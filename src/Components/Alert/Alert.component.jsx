import React,{useState, useEffect} from "react";
import styles from "./Alert.module.css";

import { typeToColorMapping } from "utils";

import ClearIcon from "@material-ui/icons/Clear";

import PropTypes from "prop-types";

import { classNames, returnDefault } from "utils";

export default function Alert({ color, text, showAlert:showAlertProp, classes }) {

	let [showAlert,setShowAlert] = useState(showAlertProp || false)

	useEffect(() => {
		setShowAlert(showAlertProp)	
	}, [showAlertProp])

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
				<img src={`/icons/alert-${color}.svg`} className={styles.alertIcon}/>
				<p className={styles.alertText}>{text}</p>
				<ClearIcon className={styles.icon} onClick={e=>setShowAlert(false)} />
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
