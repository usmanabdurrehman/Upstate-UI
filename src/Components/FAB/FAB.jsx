import React, { useState } from "react";
import styles from "./FAB.module.css";

import PropTypes from "prop-types";

import { typeToColorMapping } from "utils";

import classNames from "classnames";

export default function FAB({
  children,
  color,
  variant,
  disabled,
  classes,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={classNames({
        [styles.button]: true,
        [typeToColorMapping({ color, variant })]: true,
        [styles.disabled]: disabled,
        [classes?.FAB]: classes?.FAB,
      })}
    >
      <div
        className={classNames({
          [variant == "outlined"
            ? typeToColorMapping({ color, variant: "filled" })
            : styles.buttonWhiteRibbon]: true,
          [styles.buttonActiveRibbon]: true,
          [styles.buttonActiveRibbonBottom]: true,
        })}
      ></div>
      <div
        className={classNames({
          [variant == "outlined"
            ? typeToColorMapping({ color, variant: "filled" })
            : styles.buttonWhiteRibbon]: true,
          [styles.buttonActiveRibbon]: true,
          [styles.buttonActiveRibbonTop]: true,
        })}
      ></div>
      <div className={styles.buttonContent}>{children}</div>
    </button>
  );
}

FAB.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "default",
  ]),
  variant: PropTypes.oneOf(["filled", "outlined"]),
  disabled: PropTypes.bool,
  classes: PropTypes.object,
};

FAB.defaultProps = {
  color: "default",
  variant: "outlined",
  disabled: false,
};
