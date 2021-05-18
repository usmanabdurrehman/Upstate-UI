import React, { useState, useEffect } from "react";
import dummyData from "./DataTable.constants";

import styles from "./DataTable.module.css";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import GetAppIcon from "@material-ui/icons/GetApp";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";

import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { IconButton, Checkbox } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2),
	},
}));

export default function DataTable({ columns, customWidgets }) {
	const classes = useStyles();

	const [data, setData] = useState(dummyData);
	const [csvDownloadLink, setCsvDownloadLink] = useState(null);

	const dataColumns = Object.keys(data[0]);
	const [tableColumns, setTableColumns] = useState(columns || dataColumns);
	const [filterColumns, setFilterColumns] = useState(tableColumns);

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

	return (
		<div>
			<div className={styles.iconsWrapper}>
				<div className={styles.icons}>
					<IconButton
						aria-describedby={id}
						variant="contained"
						color="primary"
						onClick={handleClick}
					>
						<ViewColumnIcon />
					</IconButton>
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
										checked={tableColumns.includes(column)}
										onChange={(e) =>
											handleColumnChange(
												tableColumns.includes(column),
												column
											)
										}
										inputProps={{
											"aria-label": "primary checkbox",
										}}
									/>
									{column}
								</div>
							))}
						</div>
					</Popover>
					<a href={csvDownloadLink} download="table.csv">
						<IconButton>
							<GetAppIcon />
						</IconButton>
					</a>
				</div>
			</div>
			<div className={styles.tableWrapper}>
				<table className={styles.table}>
					<tr className={styles.headerRow}>
						{tableColumns.map((heading, index) => (
							<th onClick={(e) => sortBy(heading)}>
								<div>
									<p>{heading}</p>{" "}
									<ArrowUpwardIcon
										className={`${styles.upicon} ${
											orderDesc[index]
												? styles.invert
												: styles.normal
										}`}
									/>
								</div>
							</th>
						))}
					</tr>
					{data.map((row, index) => (
						<tr className={styles.row}>
							{tableColumns.map((column) => (
								<td>{customWidgets[column] ? customWidgets[column](row[column]) : row[column]}</td>
							))}
						</tr>
					))}
				</table>
			</div>
		</div>
	);
}
