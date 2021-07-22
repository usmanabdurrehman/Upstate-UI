import React, { useState, useEffect } from "react";
import styles from "./Select.module.css";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

import ClickAwayListener from "react-click-away-listener";

export default function Select({ color, options, selectedValue, onChange }) {
  if (!options) {
    throw new Error("You should have atleast one option");
  } else if (!Array.isArray(options)) {
    throw new Error("options prop should be an array of strings");
  }

  const [selected, setSelected] = useState(selectedValue || options[0]);
  const [selectOpen, setSelectOpen] = useState(false);

  let handleClickAway = () => setSelectOpen(false);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className={styles.select}
        style={{
          borderColor: typeToColorMapping({ color }).backgroundColor,
        }}
      >
        <div
          className={styles.selectedValue}
          onClick={(e) => setSelectOpen(true)}
        >
          <div className={styles.selected}>{selected}</div>
          <KeyboardArrowDownIcon
            className={classNames({
              [styles.icon]: true,
              [styles.invert]: selectOpen,
            })}
          />
        </div>
        {selectOpen && (
          <div className={styles.selectOptions}>
            {options.map((option) => (
              <div
                className={classNames({
                  [styles.selectOption]: true,
                  [styles.selectedOption]: option == selected,
                })}
                onClick={(e) => {
                  setSelected(option);
                  setSelectOpen(false);
                  onChange && onChange(option);
                }}
                style={{
                  borderColor: typeToColorMapping({ color }).backgroundColor,
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}

Select.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "default",
  ]),
};

Select.defaultProps = {
  color: "default",
};
