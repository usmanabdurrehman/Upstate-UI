import React from "react";
import styles from "./Button.module.css";

import PropTypes from "prop-types";

import { typeToColorMapping } from "utils";

import classNames from "classnames";

export default function Button({
  children,
  color,
  variant,
  size,
  fullWidth,
  classes,
  onClick,
  isLoading,
  href,
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

  const Button = (
    <button
      onClick={() => {
        !isLoading && onClick && onClick();
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
      <div
        className={classNames({
          [variant == "outlined"
            ? typeToColorMapping({ color, variant: "filled" })
            : styles.buttonWhiteRibbon]: true,
          [styles.buttonActiveRibbon]: true,
          [styles.isLoading]: isLoading,
        })}
      ></div>
      <div className={styles.buttonContent}>{children}</div>
    </button>
  );

  return href ? <a href={href}>{Button}</a> : Button;
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
  classes: PropTypes.object,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  color: "default",
  variant: "outlined",
  children: "default",
  size: "small",
  fullWidth: false,
  isLoading: false,
};
