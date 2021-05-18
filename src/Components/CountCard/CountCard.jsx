import React from "react";
import styles from "./CountCard.module.css";

export default function CountCard({number,text,complaint}) {
	return (
		<div className={styles.card}>
			<div className={styles.hoverLineTop} style={{backgroundColor:complaint ? '#FF5353' : '#61FF7E'}}></div>
			<div className={styles.gridChild}><h1>{number}</h1></div>
			<div className={styles.gridChild}>{text}</div>
		</div>
	);
}
