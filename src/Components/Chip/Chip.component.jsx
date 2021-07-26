import React from "react";
import styles from "./Chip.module.css";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

export default function Chip({
  label,
  color,
  clickable,
  disabled,
  variant,
  classes,
}) {
  return (
    <div
      className={classNames({
        [styles.chip]: true,
        [typeToColorMapping({ color })]: true,
        [styles.clickable]: clickable,
        [styles.appearDisabled]: disabled,
        [classes?.chip]:classes?.chip
      })}
    >
      {label}
    </div>
  );
}

Chip.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "default",
  ]),
  variant: PropTypes.oneOf(["filled", "outlined"]),
  label: PropTypes.string,
  clickable: PropTypes.bool,
  disabled: PropTypes.bool,
  classes:PropTypes.object
};

Chip.defaultProps = {
  color: "default",
  variant: "outlined",
  label: "default",
  clickable: true,
  disabled: false,
};
