import React, { useState } from "react";
import dummyData from "./DataTable.constants";

import styles from "./DataTable.module.css";

export default function DataTable({ columns }) {
	const [data, setData] = useState(dummyData);

	const dataColumns = Object.keys(data[0]);
	const tableColumns = columns || dataColumns;

	const [orderDesc, setOrderDesc] = useState(
		tableColumns.map((column) => true)
	);

	if (columns.find((column) => !dataColumns.includes(column))) {
		console.log("Column name does not exist");
		throw new Error(
			"Column name does not exist. Check for spelling mistakes"
		);
	}

	let sortBy = (key) => {
		let index = tableColumns.findIndex((column) => column == key);

		if (orderDesc[index]) {
			setData([
				...data.sort((a, b) =>
					isNaN(a[key])
						? a[key].toLowerCase() < b[key].toLowerCase()
						: parseInt(b[key]) - parseInt(a[key])
				),
			]);
		} else {
			setData([
				...data.sort((a, b) =>
					isNaN(a[key])
						? a[key].toLowerCase() > b[key].toLowerCase()
						: parseInt(a[key]) - parseInt(b[key])
				),
			]);
		}
		const desc = [...orderDesc];
		desc[index] = !desc[index];
		setOrderDesc(desc);
	};

	return (
		<div className={styles.tableWrapper}>
			<table className={styles.table}>
				<tr className={styles.headerRow}>
					{tableColumns.map((heading, index) => (
						<th onClick={(e) => sortBy(heading)}>
							{heading}{" "}
							<img
								className={`${styles.upicon} ${
									orderDesc[index]
										? styles.invert
										: styles.normal
								}`}
								src="icons/iconup.png"
							/>
						</th>
					))}
				</tr>
				{data.map((row, index) => (
					<tr className={styles.row}>
						{tableColumns.map((column) => (
							<td>{row[column]}</td>
						))}
					</tr>
				))}
			</table>
		</div>
	);
}
