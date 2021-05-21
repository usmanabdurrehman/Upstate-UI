import React, { useState } from "react";
import styles from "./FAB.module.css";

import {classNames,typeToColorMapping} from 'utils'

export default function FAB({ children,onClick }) {
	const [clicked, setClicked] = useState(false);

	return (
		<button
			onClick={()=>{
				setClicked(true)
				onClick && onClick()
			}}
			className={
				classNames({
					[styles.button]:true,
					[styles.buttonAnimation]:clicked
				})
			}
			onAnimationEnd={()=>{setClicked(false)}}
		>
			{children}
		</button>
	);
}
