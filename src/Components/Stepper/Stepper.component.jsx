import React,{useState} from "react";
import styles from "./Stepper.module.css";

import { classNames } from "utils";

export default function Stepper() {
	let [activeStep, setActiveStep] = useState(0);
	let steps = ["Step 1", "Step 2", "PreFinal", "Finish"];

	return (
		<>
			<div className={styles.stepper}>
				{Array(steps.length + (steps.length - 1))
					.fill("_")
					.map((item, index) =>
						index % 2 == 0 ? (
							<div>{steps[index / 2]}</div>
						) : (
							<div
								className={classNames({
									[styles.line]: true,
									[styles.done]:
										activeStep + (activeStep - 1) >= index,
								})}
							></div>
						)
					)}
			</div>
			<button onClick={(e) => setActiveStep(activeStep + 1)}>+</button>
			<button onClick={(e) => setActiveStep(activeStep - 1)}>-</button>
		</>
	);
}
