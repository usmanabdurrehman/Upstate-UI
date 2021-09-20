import React, { useState, useEffect } from "react";
import * as Components from "Components";
import * as actions from "./extraActions";

import axios from "axios";

const GRID_GAP = 15;

function debounce(wait, immediate) {
	let func = (fields) =>
		console.log("%c On Snap ", "background: blue; color: white", fields);
	var timeout;
	return function (args) {
		var context = this;
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			timeout = null;
			if (!immediate) {
				func(args);
			}
		}, wait);
		if (callNow) func(args);
	};
}

let debouncedFunction = debounce(1000);

export default function Form({ schema, formData, submitOptions }) {
	let [fields, setFields] = useState({
		...Object.keys(schema).reduce((acc, val) => {
			acc[val] = null;
			return acc;
		}, {}),
		...formData,
	});

	const blocks = [
		...new Set(
			Object.entries(schema)
				.map(([name, sch]) => sch?.block)
				.filter((val) => val != undefined)
		),
	];

	const blockObject = blocks.reduce((acc, val) => {
		acc[val] = Object.entries(schema)
			.filter(([name, sch]) => sch?.block == val)
			.map((x) => x[0]);
		return acc;
	}, {});

	let isBlock = (name, blocks) => {
		return blocks.includes(name);
	};

	let submitHandler = (e) => {
		e.preventDefault();
		axios({ method: "post", data: fields, ...submitOptions })
			.then((res) => {})
			.catch((err) => {});
	};

	const conditions = Object.entries(schema).reduce((acc, [name, val]) => {
		val?.condition &&
			acc.push(
				...val?.condition.map((cond) => ({ ...cond, triggerer: name }))
			);
		return acc;
	}, []);

	const rules = conditions.filter((condition) => condition.name == "rule");
	const [rulesFirer, setRulesFirer] = useState(
		rules.map((rule) => ({ rule: rule.function, fire: false }))
	);
	// console.log("rulesFirer", rulesFirer);

	useEffect(() => {
		debouncedFunction(fields);
	});

	const schemaConverter = () => {
		const maxGridColumn = Math.max(
			...Object.values(schema).map(({ gridColumn = 1 }) => gridColumn)
		);
		// console.log(maxGridColumn);
		const trackingAutoRows = {};
		const listOfColumns = [...Array(maxGridColumn).keys()].map(
			(column) => column + 1
		);
		listOfColumns.forEach((column) => {
			trackingAutoRows[column] = [];
		});
		// console.log(trackingAutoRows);
		return (
			<form
				style={{
					display: "grid",
					gridTemplateColumns: `repeat(${maxGridColumn},1fr)`,
					gridGap: GRID_GAP,
					gridAutoFlow: "row dense",
				}}
				onSubmit={submitHandler}
			>
				{Object.entries(schema).map(
					([
						name,
						{
							widget,
							gridColumn = 1,
							gridRow = "auto",
							block,
							...rest
						},
					]) => {
						let conditionsOfInput = conditions
							?.filter(
								(cond) =>
									cond?.applyTo == name ||
									(cond?.applyTo == block &&
										block &&
										blockObject[block].includes(name))
							)
							.sort((a, b) => a.order - b.order);
						let orders = [
							...new Set(
								conditionsOfInput.map((item) => item.order)
							),
						];
						console.log(
							"name",
							name,
							"conditionsOfInput",
							conditionsOfInput
						);

						conditionsOfInput = orders.reduce((acc, val) => {
							let subset = conditionsOfInput.filter(
								(item) => val == item.order
							);
							acc.push(
								subset.length == 1 ? subset[0] : [...subset]
							);
							return acc;
						}, []);
						let styles = conditionsOfInput.reduce((acc, val) => {
							let displayStyle = Array.isArray(val)
								? val.filter((i) => i.name == "show") && {
										display: val
											.filter((i) => i.name == "show")
											.map(
												(item) =>
													fields[item?.triggerer] ==
													item?.value
											)
											.reduce(
												(acc, val) => acc * val,
												true
											)
											? "block"
											: "none",
								  }
								: val?.name == "show" && {
										display:
											fields[val?.triggerer] == val?.value
												? "block"
												: "none",
								  };
							acc = {
								...acc,
								...displayStyle,
							};
							return acc;
						}, {});
						console.log("styles", styles);

						rules
							.filter((rule) => rule.triggerer == name)
							.forEach((rule) => {
								if (fields[rule.triggerer] == rule.value) {
									setRulesFirer([
										...rulesFirer.filter(
											(rul) => rul.rule != rule.function
										),
										{ rule: rule.function, fire: true },
									]);
									console.log("rulesFirer", rulesFirer);
									rulesFirer.find(
										(rul) => rul.rule == rule.function
									).fire &&
										fields[rule.triggerer] == rule.value &&
										actions[rule.function](
											rule.params,
											fields,
											setFields
										);
									setRulesFirer([
										...rulesFirer.filter(
											(rul) => rul.rule != rule.function
										),
										{ rule: rule.function, fire: false },
									]);
								}
							});
						gridColumn = gridColumn == "auto" ? 1 : gridColumn;
						return (
							<div
								style={{
									gridColumn: `${gridColumn}/${
										gridColumn + 1
									}`,
									gridRow:
										gridRow == "auto"
											? "auto/auto"
											: `${gridRow}/${gridRow + 1}`,
									...styles,
								}}
							>
								{Components[widget]({
									value: fields[name],
									...(conditions?.find(
										(cond) =>
											cond?.applyTo == name ||
											(cond?.applyTo == block &&
												block &&
												blockObject[block].includes(
													name
												) &&
												cond?.name == "propPass" &&
												fields[
													conditions?.find(
														(cond) =>
															cond?.applyTo ==
																name ||
															(cond?.applyTo ==
																block &&
																block &&
																blockObject[
																	block
																].includes(
																	name
																))
													)?.triggerer
												] ==
													conditions?.find(
														(cond) =>
															cond?.applyTo ==
																name ||
															(cond?.applyTo ==
																block &&
																block &&
																blockObject[
																	block
																].includes(
																	name
																))
													)?.value)
									) && {
										...conditions?.find(
											(cond) =>
												cond?.applyTo == name ||
												(cond?.applyTo == block &&
													block &&
													blockObject[block].includes(
														name
													))
										)?.props,
									}),
									onChange: (value) =>
										setFields({ ...fields, [name]: value }),
									...rest,
								})}
							</div>
						);
					}
				)}
			</form>
		);
	};
	return schemaConverter();
}
