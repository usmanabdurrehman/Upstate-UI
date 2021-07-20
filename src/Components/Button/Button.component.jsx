import React,{useState} from 'react'
import styles from './Button.module.css'

import PropTypes from 'prop-types';

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

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'success', 'warning','danger','default']),
  variant:PropTypes.oneOf(['filled', 'outlined'])
};

Button.defaultProps = {
  type:"default",
  variant:"outlined",
  children:"lmao"
};