import React from "react";
import styles from "./CountCard.module.css";

import {typeToColorMapping} from 'utils'

export default function CountCard({number,text,color,width,height,type}) {
	return (
		<div className={styles.card} style={{width,height}}>
			<div className={styles.hoverLineTop} style={{backgroundColor:color || typeToColorMapping(type).backgroundColor}}></div>
			<div className={styles.gridChild}><h1>{number}</h1></div>
			<div className={styles.gridChild}>{text}</div>
		</div>
	);
}
