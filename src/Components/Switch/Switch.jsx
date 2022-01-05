import React, { useState } from "react";
import styles from "./Switch.module.css";

import PropTypes from "prop-types";

import { typeToColorMapping, returnDefault } from "utils";

import classNames from "classnames";

export default function Switch({
  onClick,
  checked,
  color,
  classes,
  icon,
  checkedIcon,
}) {
  return (
    <div
      className={classNames({
        [styles.switch]: true,
        [styles[`switchBG-${returnDefault({ color })}`]]: checked,
        [classes?.switchBG]: classes?.switchBG,
      })}
      onClick={() => {
        onClick && onClick(checked);
      }}
    >
      <div
        className={classNames({
          [styles.switchCircle]: true,
          [styles.switchClicked]: checked,
          [styles.switchUnclicked]: !checked,
          [typeToColorMapping({ color })]: checked,
          [classes?.switchCircle]: classes?.switchCircle,
        })}
      >
        {checked && checkedIcon && checkedIcon}
        {!checked && icon && icon}
      </div>
    </div>
  );
}

Switch.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "default",
  ]),
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

Switch.defaultProps = {
  color: "default",
};
