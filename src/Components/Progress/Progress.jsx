import React, { useEffect, useState, useRef } from "react";
import styles from "./Progress.module.css";

import PropTypes from "prop-types";

import { typeToColorMapping } from "utils";

import classNames from "classnames";

export default function Progress({ color, progress, classes }) {
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
          width: `${progress}%`,
        }}
      ></div>
      <div
        className={classNames({
          [styles.remaining]: true,
          [classes?.remaining]: [classes?.remaining],
        })}
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
  progress: PropTypes.number,
  classes: PropTypes.object,
};

Progress.defaultProps = {
  color: "default",
};
