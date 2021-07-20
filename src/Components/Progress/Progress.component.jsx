import React,{useEffect,useState,useRef} from "react";
import styles from "./Progress.module.css";

export default function Progress({ progress }) {

	const [progressState, setProgressState] = useState(progress)

	const prevProgress = useRef()

	useEffect(()=>{
		prevProgress.current = progress
	},[progress])

	return (
		<div className={styles.progressbar}>
			<div
				className={styles.progress}
				style={{ width: `${progress}%` }}
			></div>
			<div
				className={styles.remaining}
				style={{ width: `calc(${100 - progress}% + 10px)` }}
			></div>
		</div>
	);
}
