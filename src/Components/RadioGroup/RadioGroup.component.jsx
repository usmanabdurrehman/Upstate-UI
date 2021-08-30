import React, { useState } from "react";
import styles from "./RadioGroup.module.css";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

export default function RadioGroup({ color, options, classes, onChange }) {
  if (!options) {
    throw new Error("You should have atleast one option");
  } else if (!Array.isArray(options)) {
    throw new Error("options prop should be an array of strings");
  }

  const [clicked, setClicked] = useState(
    options.map((option, index) => (index === 0 ? true : false))
  );

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
              [styles.radioClicked]: clicked[index],
              [classes?.radio]: classes?.radio,
            })}
            onClick={(e) => {
              const optionsArr = [...options].map((option) => false);
              optionsArr[index] = true;
              onChange && onChange(options[index]);
              setClicked(optionsArr);
            }}
          >
            <div
              className={classNames({
                [styles.radioCircle]: true,
                [styles.radioCircleClicked]: clicked[index],
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

RadioGroup.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "default",
  ]),
  classes:PropTypes.object,
  options:PropTypes.string,
  onChange:PropTypes.func
};

RadioGroup.defaultProps = {
  color: "default",
};
