import React from 'react'
import styles from './Chip.module.css'

export default function Chip({label}) {
	return (
		<div className={styles.chip}>
			<div className={styles.label}>{label}</div>
		</div>
	)
}