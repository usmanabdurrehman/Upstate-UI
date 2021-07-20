import React, { useState } from "react";
import styles from "./Checkbox.module.css";

import Check from "./Check.svg";

import { classNames } from "utils";

export default function Checkbox() {
	let [checked, setChecked] = useState(false);

	return (
		<div
			className={classNames({
				[styles.checkbox]: true,
				[styles.selected]: checked,
			})}
			onClick={(e) => setChecked(!checked)}
		>
			<img src={Check} className={styles.check} />
		</div>
	);
}
