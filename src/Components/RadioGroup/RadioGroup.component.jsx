import React, { useState } from "react";
import styles from "./RadioGroup.module.css";

import { classNames } from "utils";

export default function RadioGroup({ options, onChange }) {
	if (!options) {
		throw new Error("You should have atleast one option");
	} else if (!Array.isArray(options)) {
		throw new Error("options prop should be an array of strings");
	}

	const [clicked, setClicked] = useState(
		options.map((option, index) => (index == 0 ? true : false))
	);

	return (
		<div className={styles.radioGroup}>
			{options.map((option, index) => (
				<div className={styles.radioWrapper}>
					<div
						className={classNames({
							[styles.radio]:true,
							[styles.radioClicked]:clicked[index]
						})}
						onClick={(e) => {
							const optionsArr = [...options].map(
								(option) => false
							);
							optionsArr[index] = true;
							onChange && onChange(optionsArr[index])
							setClicked(optionsArr);
						}}
					>
						<div
							className={classNames({
								[styles.radioCircle]: true,
								[styles.radioCircleClicked]: clicked[index],
							})}
						></div>
					</div>
					<p className={styles.optionName}>{option}</p>
				</div>
			))}
		</div>
	);
}
