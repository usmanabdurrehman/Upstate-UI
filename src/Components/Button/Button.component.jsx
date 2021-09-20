import React, { useState, useEffect } from "react";
import styles from "./Button.module.css";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

export default function Button({
  children,
  color,
  variant,
  size,
  fullWidth,
  classes,
  onClick,
  ...rest
}) {
  let typeToSizeMapper = (size) => {
    let typeToSizeMapper = {
      small: styles.buttonSmall,
      medium: styles.buttonMedium,
      large: styles.buttonLarge,
    };
    return typeToSizeMapper[size] || typeToSizeMapper.small;
  };

  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      className={classNames({
        [styles.button]: true,
        [typeToSizeMapper(size)]: true,
        [typeToColorMapping({ color, variant })]: true,
        [styles.fullWidth]: fullWidth,
        [classes?.button]: classes?.button,
      })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "default",
  ]),
  variant: PropTypes.oneOf(["filled", "outlined"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  fullWidth: PropTypes.bool,
  classes:PropTypes.object
};

Button.defaultProps = {
  color: "default",
  variant: "outlined",
  children: "default",
  size: "small",
  fullWidth: false,
};
