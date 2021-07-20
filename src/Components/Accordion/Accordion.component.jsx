import React, { useState } from "react";
import styles from "./Accordion.module.css";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { classNames } from "utils";

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_animate

export default function Accordion({ content, title }) {
	const [open, setOpen] = useState(false);

	return (
		<div
			className={classNames({
				[styles.accordion]: true,
				[styles.accordionOpen]: open,
			})}
		>
			<div className={styles.title} onClick={(e) => setOpen(!open)}>
				<p>Accordion</p>
				<ExpandMoreIcon
					className={classNames({
						[styles.arrow]: true,
						[styles.invert]: open,
					})}
				/>
			</div>
			<div className={styles.content}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
				sodales dolor eu tellus mattis cursus. Vivamus lacus mauris,
				gravida quis orci eu, mattis ullamcorper felis. Nunc sed mi
				porta, condimentum mauris malesuada, commodo enim. Interdum et
				malesuada fames ac ante ipsum primis in faucibus. Nulla et
				iaculis arcu, eget ultrices lectus. Cras a justo ultricies,
				congue dolor suscipit, consequat nisl. Ut ac posuere turpis.
			</div>
		</div>
	);
}
