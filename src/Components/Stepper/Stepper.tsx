import React, { useState, useEffect } from "react";
import styles from "./Stepper.module.css";

import classNames from "classnames";

interface StepperProps {
  active?: number;
  steps: string[];
}

export default function Stepper({ active = 0, steps }: StepperProps) {
  return (
    <>
      <div className={styles.stepper}>
        {Array(steps.length + (steps.length - 1))
          .fill("_")
          .map((_, index) =>
            index % 2 === 0 ? (
              <div>{steps[index / 2]}</div>
            ) : (
              <div
                className={classNames({
                  [styles.line]: true,
                  [styles.done]: active + (active - 1) >= index,
                })}
              ></div>
            )
          )}
      </div>
    </>
  );
}
