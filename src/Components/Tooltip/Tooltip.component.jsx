import React from "react";
import styles from "./Tooltip.module.css";

export default function Tooltip({ children, title }) {
	return (
		<div className={styles.tooltipWrapper}>
			<div className={styles.tooltip}>{title}</div>
			<div className={styles.tooltipContent}>{children}</div>
		</div>
	);
}
