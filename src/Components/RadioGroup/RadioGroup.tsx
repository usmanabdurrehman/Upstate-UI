import React, { useState } from "react";
import styles from "./RadioGroup.module.css";

import PropTypes from "prop-types";

import { typeToColorMapping } from "../../utils";

import classNames from "classnames";
import { Classes, Color } from "../../types";

interface RadioGroupProps {
  color: Color;
  options: string[];
  classes: Classes;
  onChange: (index: number) => void;
  value: number;
}

export default function RadioGroup({
  color,
  options,
  classes,
  onChange,
  value: selectedOption,
}: RadioGroupProps) {
  if (!options) {
    throw new Error("You should have atleast one option");
  } else if (!Array.isArray(options)) {
    throw new Error("options prop should be an array of strings");
  }

  return (
    <div
      className={classNames({
        [styles.radioGroup]: true,
        [classes?.radioGroup]: classes?.radioGroup,
      })}
    >
      {options.map((option, index) => (
        <div
          className={classNames({
            [styles.radioWrapper]: true,
            [classes?.radioWrapper]: classes?.radioWrapper,
          })}
        >
          <div
            className={classNames({
              [styles.radio]: true,
              [typeToColorMapping({ color, variant: "outlined" })]: true,
              [styles.radioClicked]: selectedOption == index,
              [classes?.radio]: classes?.radio,
            })}
            onClick={(e) => {
              onChange && onChange(index);
            }}
          >
            <div
              className={classNames({
                [styles.radioCircle]: true,
                [styles.radioCircleClicked]: selectedOption == index,
                [typeToColorMapping({ color })]: true,
                [classes?.radio]: classes?.radio,
              })}
            ></div>
          </div>
          <p className={styles.optionName}>{option}</p>
        </div>
      ))}
    </div>
  );
}
