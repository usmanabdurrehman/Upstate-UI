import React, { useState } from "react";
import styles from "./Switch.module.css";

import { typeToColorMapping, returnDefault } from "../../utils";

import classNames from "classnames";
import { Classes, Color } from "../../types";

interface SwitchProps {
  onClick?: (checked: boolean) => void;
  checked?: boolean;
  color?: Color;
  classes?: Classes;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
}

export default function Switch({
  onClick,
  checked = false,
  color = "default",
  classes,
  icon,
  checkedIcon,
}: SwitchProps) {
  return (
    <div
      className={classNames({
        [styles.switch]: true,
        [styles[`switchBG-${returnDefault({ color })}`]]: checked,
        [classes?.switchBG ?? ""]: classes?.switchBG,
      })}
      onClick={() => {
        onClick && onClick(checked);
      }}
      data-cy="switch"
    >
      <div
        className={classNames({
          [styles.switchCircle]: true,
          [styles.switchClicked]: checked,
          [styles.switchUnclicked]: !checked,
          [typeToColorMapping({ color })]: checked,
          [classes?.switchCircle ?? ""]: classes?.switchCircle,
        })}
      >
        {checked && checkedIcon && checkedIcon}
        {!checked && icon && icon}
      </div>
    </div>
  );
}
