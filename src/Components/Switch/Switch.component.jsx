import React, { useState } from "react";
import styles from "./Switch.module.css";

import { classNames } from "utils";

export default function Switch({onChange}) {
	const [clicked, setClicked] = useState(false);

	return (
		<div
			className={classNames({
				[styles.switch]: true,
				[styles.switchBackgroundClicked]: clicked,
			})}
			onClick={(e) => {
				setClicked(!clicked)
				onChange && onChange(clicked)
			}}
		>
			<div
				className={classNames({
					[styles.switchCircle]: true,
					[styles.switchClicked]: clicked,
				})}
			></div>
		</div>
	);
}
