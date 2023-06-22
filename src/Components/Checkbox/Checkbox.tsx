import React from "react";

import styles from "./Checkbox.module.css";
import globalStyles from "styles/global.module.css";

import Check from "./Check.svg";

import { typeToColorMapping } from "../../utils";

import classNames from "classnames";

import { InputBase } from "../InputBase";
import { Classes, Color } from "../../types";

interface CheckboxProps {
  color: Color;
  checked: boolean;
  onClick: (checked: boolean) => void;
  disabled: boolean;
  classes: Classes;
  required: boolean;
  icon: React.ReactNode;
  checkedIcon: React.ReactNode;
}

export default function Checkbox({
  color = "default",
  checked,
  onClick,
  disabled = false,
  classes,
  required = false,
  icon,
  checkedIcon,
}: CheckboxProps) {
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
      {required && <InputBase />}
    </div>
  );
}
