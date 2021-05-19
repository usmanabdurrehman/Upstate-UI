import React, { useState, useEffect, useRef } from "react";
import dummyData from "./DataTable.constants";

import styles from "./DataTable.module.css";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import GetAppIcon from "@material-ui/icons/GetApp";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import SearchIcon from "@material-ui/icons/Search";
import PrintIcon from "@material-ui/icons/Print";

import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { IconButton, Checkbox } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2),
	},
}));

export default function DataTable({
	columns,
	customWidgets,
	options: { sort, sortWholeData, columnSelect, csvDownload, printCsv, paginationLimit },
}) {
	const classes = useStyles();

	const icons = [columnSelect, csvDownload, printCsv].filter((icon) => icon);
	const tableRef = useRef(null);

	const dataColumns = Object.keys(dummyData[0]);
	const [tableColumns, setTableColumns] = useState(columns || dataColumns);
	const [filterColumns, setFilterColumns] = useState(tableColumns);

	const [data, setData] = useState(
		dummyData.map((obj) => {
			{
				let tempObj = {};
				filterColumns.forEach((column) => {
					tempObj[column] = obj[column];
				});
				return tempObj;
			}
		})
	);

	const [paginationData,setPaginationData] = useState(data.length>paginationLimit ? data.slice(0,paginationLimit) : data)

	const [csvDownloadLink, setCsvDownloadLink] = useState(null);
	const [csv, setCsv] = useState(null);

	const [orderDesc, setOrderDesc] = useState(
		tableColumns.map((column) => true)
	);

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	if (columns.find((column) => !dataColumns.includes(column))) {
		throw new Error(
			"Column name does not exist. Check for spelling mistakes"
		);
	}

	let sortBy = (key) => {
		if (sort) {
			let index = tableColumns.findIndex((column) => column == key);

			if (orderDesc[index]) {
				setPaginationData([
					...paginationData.sort((a, b) =>
						isNaN(a[key])
							? a[key].toLowerCase() < b[key].toLowerCase()
							: parseInt(b[key]) - parseInt(a[key])
					),
				]);
			} else {
				setPaginationData([
					...paginationData.sort((a, b) =>
						isNaN(a[key])
							? a[key].toLowerCase() > b[key].toLowerCase()
							: parseInt(a[key]) - parseInt(b[key])
					),
				]);
			}
			const desc = [...orderDesc];
			desc[index] = !desc[index];
			setOrderDesc(desc);
		}
	};

	useEffect(() => {
		let csv = Object.keys(data[0]).join(",") + "\n";
		data.forEach((row) => {
			Object.values(row).forEach((value) => {
				csv += `"${value}",`;
			});
			csv += "\n";
		});
		const blob = new Blob([csv], { type: "text/csv" });
		setCsvDownloadLink(URL.createObjectURL(blob));
	}, []);

	let handleColumnChange = (isPresent, columnToBeOperated) => {
		console.log(
			filterColumns.findIndex((column) => column == columnToBeOperated)
		);
		setTableColumns(
			isPresent
				? [
						...tableColumns.filter(
							(column) => column != columnToBeOperated
						),
				  ]
				: [
						...tableColumns.slice(
							0,
							filterColumns.findIndex(
								(column) => column == columnToBeOperated
							)
						),
						columnToBeOperated,
						...tableColumns.slice(
							filterColumns.findIndex(
								(column) => column == columnToBeOperated
							),
							tableColumns.length
						),
				  ]
		);
	};

	let searchBy = (e) => {
		const substring = e.target.value.toLowerCase();
		if (substring) {
			setData([
				...data.filter((row) => {
					console.log(row);
					console.log(Object.values(row));
					console.log(
						Object.values(row).find((item) => {
							console.log(item.includes(substring));
							return item.includes(substring);
						})
					);
					if (
						filterColumns.find(
							(column) =>
								typeof row[column] == "string" &&
								row[column].toLowerCase().includes(substring)
						)
					) {
						return true;
					} else {
						return false;
					}
				}),
			]);
		} else {
			setData([
				...dummyData.map((obj) => {
					{
						let tempObj = {};
						filterColumns.forEach((column) => {
							tempObj[column] = obj[column];
						});
						return tempObj;
					}
				}),
			]);
		}
	};

	let handlePrint = (e) => {
		var w = window.open();

		var html = "<!DOCTYPE HTML>";
		html += '<html lang="en-us">';
		html += "<head><style></style></head>";
		html += "<body>";
		html += tableRef.current.innerHTML;
		html += "</body></html>";

		console.log(html);

		w.document.write(html);
		w.window.print();
		// w.document.close();
	};

	let getNumberOfPages = () => {
		let number = 1;
		let difference = data.length;

		console.log("diff", difference);

		while (difference > paginationLimit) {
			console.log("diff", difference);
			difference -= paginationLimit;
			number += 1;
		}
		console.log("num", number);
		return number
	};

	let displayPaginationData = (number) => {
		setPaginationData([...data.slice((number*paginationLimit)-paginationLimit,data.length>number*paginationLimit ? number*paginationLimit : data.length)])
	}

	return (
		<div>
			{icons.length != 0 && (
				<div className={styles.filterWrapper}>
					<div className={styles.searchWrapper}>
						<SearchIcon className={styles.searchIcon} />{" "}
						<input className={styles.search} onChange={searchBy} />
					</div>
					<div
						className={styles.icons}
						style={{
							gridTemplateColumns: `repeat(${icons.length},1fr)`,
						}}
					>
						{printCsv && (
							<IconButton
								aria-describedby={id}
								variant="contained"
								color="primary"
								onClick={handlePrint}
							>
								<PrintIcon />
							</IconButton>
						)}
						{columnSelect && (
							<IconButton
								aria-describedby={id}
								variant="contained"
								color="primary"
								onClick={handleClick}
							>
								<ViewColumnIcon />
							</IconButton>
						)}
						<Popover
							id={id}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "center",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "center",
							}}
						>
							<div className={styles.popoverContent}>
								{filterColumns.map((column) => (
									<div>
										<Checkbox
											checked={tableColumns.includes(
												column
											)}
											onChange={(e) =>
												handleColumnChange(
													tableColumns.includes(
														column
													),
													column
												)
											}
											inputProps={{
												"aria-label":
													"primary checkbox",
											}}
										/>
										{column}
									</div>
								))}
							</div>
						</Popover>
						{csvDownload && (
							<a href={csvDownloadLink} download="table.csv">
								<IconButton>
									<GetAppIcon />
								</IconButton>
							</a>
						)}
					</div>
				</div>
			)}
			<div className={styles.tableWrapper} ref={tableRef}>
				<table className={styles.table}>
					<tr className={styles.headerRow}>
						{tableColumns.map((heading, index) => (
							<th onClick={(e) => sortBy(heading)}>
								<div>
									<p>{heading}</p>{" "}
									{sort && (
										<ArrowUpwardIcon
											className={`${styles.upicon} ${
												orderDesc[index]
													? styles.invert
													: styles.normal
											}`}
										/>
									)}
								</div>
							</th>
						))}
					</tr>
					{paginationData.map((row, index) => (
						<tr className={styles.row}>
							{tableColumns.map((column) => (
								<td>
									{customWidgets[column]
										? customWidgets[column](row[column])
										: row[column]}
								</td>
							))}
						</tr>
					))}
				</table>
			</div>

			<div className={styles.paginationWrapper}>
				<div className={styles.pagination} style={{gridTemplateColumns:`repeat(${getNumberOfPages()},1fr)`}}>
					{[...Array(getNumberOfPages())].map(
						(num, index) => <div onClick={e=>displayPaginationData(index+1)}>{index + 1}</div>
					)}
				</div>
			</div>
		</div>
	);
}
