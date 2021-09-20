import React from 'react'
import styles from './Input.component'

export default function Input({
	classes,
	onChange,
	...rest
}) {
	return (
		<input {...rest} onChange={e=>onChange(e.target.value)}/>
	)
}