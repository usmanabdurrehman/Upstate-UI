import { useState } from "react";
import { typeToColorMapping } from "../../utils";
import classNames from "classnames";
import styles from "./Select.module.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ClickAwayListener from "react-click-away-listener";
import { InputBase } from "../InputBase";
import { Classes, Color } from "../../types";

export type SelectOption = {
  label: string;
  id: string;
};

interface SelectProps {
  color: Color;
  options: SelectOption[];
  selected: SelectOption | undefined;
  classes: Classes;
  onChange: (option: SelectOption) => void;
  required?: boolean;
  placeholder?: string;
}

export default function Select({
  color = "default",
  options,
  selected,
  classes,
  placeholder,
  onChange,
  required,
}: SelectProps) {
  if (!options) {
    throw new Error("You should have atleast one option");
  } else if (!Array.isArray(options)) {
    throw new Error("options prop should be an array of strings");
  } else if (!options.every((option) => option?.id)) {
    throw new Error("options should be of type [{id,label},...]");
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
                  [styles.selectedOption]: option?.id === selected?.id,
                  [classes?.selectOption]: classes?.selectOption,
                  [typeToColorMapping({ color, variant: "outlined" })]:
                    option?.id === selected?.id,
                })}
                onClick={(e) => {
                  setSelectOpen(false);
                  onChange(option);
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
