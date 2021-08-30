import React, { useEffect, useState, useRef } from "react";
import styles from "./Progress.module.css";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

export default function Progress({ color, progress, classes }) {
  const DURATION = 0.6;

  const [progressState, setProgressState] = useState(progress || 0);

  const prevProgress = useRef();

  useEffect(() => {
    setProgressState(progress);
    if (prevProgress.current != progress) {
      prevProgress.current = progress;
    }
    const progressDifference = Math.abs((prevProgress.current || 0) - progress);
    let animateProgess = setInterval(() => {
      setProgressState(progress + progressDifference / (DURATION * 1000));
      if (progressState >= progress) {
        clearInterval(animateProgess);
      }
    }, (DURATION * 1000) / progressDifference);
  }, [progress]);

  return (
    <div
      className={classNames({
        [styles.progressWrapper]: true,
        [classes?.progressWrapper]: [classes?.progressWrapper],
      })}
    >
      <div
        className={classNames({
          [styles.progress]: true,
          [typeToColorMapping({ color })]: true,
          [classes?.progress]: classes?.progress,
        })}
        style={{
          width: `${progressState}%`,
        }}
      ></div>
      <div
        className={classNames({
          [styles.remaining]: true,
          [classes?.remaining]: [classes?.remaining],
        })}
        style={{ width: `calc(${100 - progressState}% + 10px)` }}
      ></div>
    </div>
  );
}

Progress.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "default",
  ]),
  progress: PropTypes.number,
  classes: PropTypes.object,
};

Progress.defaultProps = {
  color: "default",
};