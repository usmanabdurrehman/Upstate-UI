import React, { useState, useEffect } from "react";
import styles from "./TransferList.module.css";

import { classNames } from "utils";

export default function TransferList() {
	const NUM_COLS = 2;
	// Array(NUM_COLS).fill('_').map(_=>_)
	const [transferList, setTransferList] = useState([
		["lmao", undefined],
		["son", undefined],
	]);

	let headers = ["Postive", "Negative"];

	useEffect(() => {
		console.log("useEffect transferList", transferList);
	}, [transferList]);

	return (
		<div
			className={styles.transferList}
			style={{ gridTemplateColumns: `repeat(${NUM_COLS},1fr)` }}
		>
			{headers.map((header) => (
				<h2>{header}</h2>
			))}
			{transferList.map((list, listIndex) =>
				list.map((column, columnIndex) => (
					<div
						className={classNames({
							[styles.transferCard]: column,
						})}
						onClick={(e) => {
							let transferListArray = [...transferList];
							let newColumnIndex = columnIndex + 1;
							let newRowIndex;
							if (newColumnIndex <= NUM_COLS - 1) {
								let value = column;
								let i = 0;
								while (i < transferList.length) {
									if (!transferList[i][newColumnIndex]) {
										newRowIndex = i;
										break;
									}
									i += 1;
								}
								transferListArray[newRowIndex][
									newColumnIndex
								] = value;
								transferListArray[listIndex][
									columnIndex
								] = undefined;
								i = listIndex;
								while (i <= transferList.length - 2) {
									transferListArray[i][columnIndex] =
										transferListArray[i + 1][columnIndex];
									i += 1;
								}
								transferListArray[i][
									columnIndex
								] = undefined;
								setTransferList(transferListArray);
							}
						}}
						onContextMenu={(e) => {
							let transferListArray = [...transferList];
							let newColumnIndex = columnIndex - 1;
							let newRowIndex;
							if (newColumnIndex >= 0) {
								let value = column;
								let i = 0;
								while (i < transferList.length) {
									if (!transferList[i][newColumnIndex]) {
										newRowIndex = i;
										break;
									}
									i += 1;
								}
								transferListArray[newRowIndex][
									newColumnIndex
								] = value;
								transferListArray[listIndex][
									columnIndex
								] = undefined;
								setTransferList(transferListArray);
							}
						}}
					>
						{column}
					</div>
				))
			)}
		</div>
	);
}
