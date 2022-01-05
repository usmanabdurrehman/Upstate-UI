import React, { useState, useEffect, useRef } from "react";

import styles from "./Checkbox.module.css";
import globalStyles from "styles/global.module.css";

import Check from "./Check.svg";

import PropTypes from "prop-types";

import { typeToColorMapping } from "utils";

import classNames from "classnames";

import InputBase from "../InputBase/InputBase.jsx";

export default function Checkbox({
  color,
  checked,
  onClick,
  disabled,
  classes,
  required,
  icon,
  checkedIcon,
}) {
  return (
    <div
      className={classNames({
        [styles.checkbox]: true,
        [styles.addBorder]: !icon && !checked,
        [typeToColorMapping({ color })]: !checkedIcon && checked,
        [styles.removeBorder]: !checkedIcon && checked,
        [globalStyles.disabled]: disabled,
        [classes?.checkbox]: classes?.checkbox,
      })}
      onClick={(e) => {
        !disabled && onClick && onClick(checked);
      }}
    >
      {checked &&
        (checkedIcon ? (
          checkedIcon
        ) : (
          <img src={Check} className={styles.check} alt="Check mark" />
        ))}
      {icon && !checked && icon}
      {required && <InputBase value={checked} />}
    </div>
  );
}

Checkbox.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "default",
  ]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onClick: PropTypes.func,
  classes: PropTypes.object,
};

Checkbox.defaultProps = {
  color: "default",
  disabled: false,
  required: false,
};
