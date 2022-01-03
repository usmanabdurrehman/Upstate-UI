import React from "react";
import styles from "./CountCard.module.css";

import PropTypes from "prop-types";

import { typeToColorMapping } from "utils";

import classNames from "classnames";

export default function CountCard({
  number,
  text,
  color,
  width,
  height,
  classes,
}) {
  return (
    <div className={styles.card} style={{ width, height }}>
      <div
        className={classNames({
          [styles.hoverLineTop]: true,
          [typeToColorMapping({ color })]: true,
          [classes?.hoverLine]: classes?.hoverLine,
        })}
      ></div>
      <h1
        className={classNames({
          [classes?.number]: classes?.number,
        })}
      >
        {number}
      </h1>
      <div
        className={classNames({
          [classes?.text]: classes?.text,
        })}
      >
        {text}
      </div>
    </div>
  );
}

CountCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "default",
  ]),
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  number: PropTypes.number,
  text: PropTypes.string,
  classes: PropTypes.object,
};

CountCard.defaultProps = {
  color: "default",
  width: 250,
  height: 150,
  number: 30,
  text: "Orders Completed",
};
