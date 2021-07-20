import React from "react";

import styles from "./Badge.module.css";

export default function Badge({ number, children }) {
	return (
		<div className={styles.badgeWrapper}>
			<div className={styles.badge}>
				<div>{number}</div>
			</div>
			<div className={styles.badgeContent}>{children}</div>
		</div>
	);
}
