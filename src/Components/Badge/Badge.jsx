import React from "react";

import styles from "./Badge.module.css";

import PropTypes from "prop-types";

import { typeToColorMapping, anchorOriginToClassMapper } from "utils";

import classNames from "classnames";

export default function Badge({
  anchorOrigin = { horizontal: "right", vertical: "top" },
  variant,
  color,
  number,
  max,
  invisible,
  showZero,
  classes,
  children,
}) {
  if (!number && variant != "dot") {
    throw new Error("A number must be supplied for displaying the badge");
  }

  return (
    <div className={styles.badgeWrapper}>
      {!invisible && (number === 0 ? showZero : true) && (
        <div
          className={classNames({
            [styles.badge]: true,
            [styles.dotBadge]: variant == "dot",
            [anchorOriginToClassMapper(anchorOrigin)]: true,
            [typeToColorMapping({ color })]: true,
            [classes?.badge]: classes?.badge,
          })}
        >
          {variant != "dot" && Math.min(number, max)}
        </div>
      )}
      <div className={styles.badgeContent}>{children}</div>
    </div>
  );
}

Badge.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "default",
  ]),
  variant: PropTypes.oneOf(["standard", "dot"]),
  number: PropTypes.number,
  max: PropTypes.number,
  showZero: PropTypes.bool,
  invisible: PropTypes.bool,
  classes: PropTypes.object,
};

Badge.defaultProps = {
  color: "default",
  max: 99,
  showZero: false,
  invisible: false,
};
