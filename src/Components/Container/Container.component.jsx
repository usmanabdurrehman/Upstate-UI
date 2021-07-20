import React from "react";
import styles from "./Container.module.css";
import { classNames } from "utils";

export default function Container({ children, className }) {
	return (
		<div
			className={classNames({
				[styles.container]: true,
				[className]: className,
			})}
		>
			{children}
		</div>
	);
}
