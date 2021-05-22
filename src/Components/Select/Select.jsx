import React, { useState } from "react";
import styles from "./Select.module.css";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import {classNames} from 'utils'

export default function Select({ options, selectedValue, onChange }) {
	if (!options) {
		throw new Error("You should have atleast one option");
	} else if (!Array.isArray(options)) {
		throw new Error("options prop should be an array of strings");
	}

	const [selected, setSelected] = useState(selectedValue || options[0]);
	const [selectOpen, setSelectOpen] = useState(false);

	return (
		<div className={styles.select}>
			<div className={styles.selectedValue} onClick={(e) => setSelectOpen(true)}>
				<div className={styles.selected}>{selected}</div>
				<KeyboardArrowDownIcon className={classNames({
					[styles.icon]:true,
					[styles.invert]:selectOpen
				})} />
			</div>
			{selectOpen && (
				<div className={styles.selectOptions}>
					{options.map((option) => (
						<div
							className={styles.selectOption}
							onClick={(e) => {
								setSelected(option);
								setSelectOpen(false);
								onChange && onChange(option)
							}}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
