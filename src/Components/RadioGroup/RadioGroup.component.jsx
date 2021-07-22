import React, { useState } from "react";
import styles from "./RadioGroup.module.css";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

export default function RadioGroup({ color, options, onChange }) {
  if (!options) {
    throw new Error("You should have atleast one option");
  } else if (!Array.isArray(options)) {
    throw new Error("options prop should be an array of strings");
  }

  const [clicked, setClicked] = useState(
    options.map((option, index) => (index == 0 ? true : false))
  );

  return (
    <div className={styles.radioGroup}>
      {options.map((option, index) => (
        <div className={styles.radioWrapper}>
          <div
            className={classNames({
              [styles.radio]: true,
              [styles.radioClicked]: clicked[index],
            })}
            onClick={(e) => {
              const optionsArr = [...options].map((option) => false);
              optionsArr[index] = true;
              onChange && onChange(optionsArr[index]);
              setClicked(optionsArr);
            }}
            style={{
              borderColor: typeToColorMapping({ color }).backgroundColor,
            }}
          >
            <div
              className={classNames({
                [styles.radioCircle]: true,
                [styles.radioCircleClicked]: clicked[index],
              })}
              style={{
                backgroundColor: typeToColorMapping({ color }).backgroundColor,
              }}
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
};

RadioGroup.defaultProps = {
  color: "default",
};
