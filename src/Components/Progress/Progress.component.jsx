import React, { useEffect, useState, useRef } from "react";
import styles from "./Progress.module.css";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

export default function Progress({ color, progress }) {
  const [progressState, setProgressState] = useState(progress);

  const prevProgress = useRef();

  useEffect(() => {
    prevProgress.current = progress;
  }, [progress]);

  return (
    <div className={styles.progressbar}>
      <div
        className={styles.progress}
        style={{
          width: `${progress}%`,
          backgroundColor: typeToColorMapping({ color }).backgroundColor,
        }}
      ></div>
      <div
        className={styles.remaining}
        style={{ width: `calc(${100 - progress}% + 10px)` }}
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
};

Progress.defaultProps = {
  color: "default",
};
