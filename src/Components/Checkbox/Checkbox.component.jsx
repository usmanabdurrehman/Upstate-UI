import React, { useState, useEffect } from "react";
import styles from "./Checkbox.module.css";

import Check from "./Check.svg";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

// Have to check the condition placed for checked

// Have to do something to make it required through a prop

export default function Checkbox({ color, checked, disabled, onChange }) {
  let [isChecked, setIsChecked] = useState(checked || false);

  useEffect(() => {
    setIsChecked(!(checked ? checked && isChecked : isChecked));
  }, [checked]);

  return (
    <div
      className={classNames({
        [styles.checkbox]: true,
        [styles.disabled]: disabled,
      })}
      onClick={(e) => {
        onChange && onChange(checked ? checked && isChecked : isChecked);
        !disabled &&
          setIsChecked(!(checked ? checked && isChecked : isChecked));
      }}
      style={
        (checked ? checked && isChecked : isChecked)
          ? {
              border: "none",
              backgroundColor: typeToColorMapping({ color }).backgroundColor,
            }
          : {}
      }
    >
      <img src={Check} className={styles.check} />
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
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  color: "default",
  disabled: false,
};
