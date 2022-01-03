import React, { useState } from "react";

import { typeToColorMapping } from "utils";

import classNames from "classnames";

import styles from "./Select.module.css";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import PropTypes from "prop-types";

import ClickAwayListener from "react-click-away-listener";

import InputBase from "../InputBase/InputBase.jsx";

export default function Select({
  color,
  options,
  selected,
  classes,
  placeholder,
  onChange,
  required,
}) {
  if (!options) {
    throw new Error("You should have atleast one option");
  } else if (!Array.isArray(options)) {
    throw new Error("options prop should be an array of strings");
  } else if (!options.every((option) => option?.value)) {
    throw new Error("options should be of type [{value,label},...]");
  }

  const [selectOpen, setSelectOpen] = useState(false);

  let handleClickAway = () => setSelectOpen(false);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className={classNames({
          [styles.select]: true,
          [typeToColorMapping({ color, variant: "outlined" })]: true,
          [classes?.selectWrapper]: classes?.selectWrapper,
        })}
      >
        <div
          className={classNames({
            [styles.selectedValue]: true,
            [classes?.selectDisplay]: classes?.selectDisplay,
          })}
          onClick={(e) => setSelectOpen(!selectOpen)}
        >
          <div className={styles.selected}>
            {selected?.label || placeholder}
          </div>
          <KeyboardArrowDownIcon
            className={classNames({
              [styles.icon]: true,
              [styles.invert]: selectOpen,
            })}
          />
        </div>
        {selectOpen && (
          <div
            className={classNames({
              [styles.selectOptions]: true,
              [classes?.selectOptions]: classes?.selectOptions,
            })}
          >
            {options.map((option) => (
              <div
                className={classNames({
                  [styles.selectOption]: true,
                  [styles.selectedOption]: option === selected,
                  [classes?.selectOption]: classes?.selectOption,
                  [typeToColorMapping({ color, variant: "outlined" })]:
                    option === selected,
                })}
                onClick={(e) => {
                  setSelectOpen(false);
                  onChange && onChange(option);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
        {required && <InputBase />}
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
  options: PropTypes.arrayOf(PropTypes.string),
  selectedValue: PropTypes.string,
  classes: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  color: "default",
};
