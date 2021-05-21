import React,{useState} from 'react'
import styles from './Button.module.css'

import {classNames,typeToColorMapping} from 'utils'

export default function Button({children,type,variant,onClick}) {

	const [clicked, setClicked] = useState(false)

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
			style={typeToColorMapping(type,variant)}
			onAnimationEnd={()=>{setClicked(false)}}>
			{children}
		</button>
	)
}