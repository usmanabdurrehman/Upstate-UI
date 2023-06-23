import React, { useState, useEffect } from "react";
import styles from "./Stepper.module.css";

import classNames from "classnames";

interface StepperProps {
  active?: number;
  steps: string[];
}

export default function Stepper({ active, steps }: StepperProps) {
  let [activeStep, setActiveStep] = useState(active || 0);

  useEffect(() => {
    typeof active !== "undefined" && setActiveStep(active);
  }, [active]);

  return (
    <>
      <div className={styles.stepper}>
        {Array(steps.length + (steps.length - 1))
          .fill("_")
          .map((item, index) =>
            index % 2 === 0 ? (
              <div>{steps[index / 2]}</div>
            ) : (
              <div
                className={classNames({
                  [styles.line]: true,
                  [styles.done]: activeStep + (activeStep - 1) >= index,
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
