import React, { memo, useState, useMemo, useEffect } from "react";
import classNames from "classnames";
import styles from "./ComboBox.module.css";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";

import ClickAwayListener from "react-click-away-listener";

import { InputBase } from "../InputBase";

import { v4 as uuidv4 } from "uuid";
import { Classes } from "../../types";

export type ComboBoxOption = {
  id: string;
  label: string;
  value?: any;
};

interface ComboBoxProps {
  fullWidth?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  showSuggestions?: boolean;
  enableCustomOptions?: boolean;
  required?: boolean;
  onBlur?: () => void;
  onChange: (options: ComboBoxOption[]) => void;
  onFocus: () => void;
  onSearchChange: (text: string) => void;
  placeholder: string;
  multi: boolean;
  options: Omit<ComboBoxOption, "id">[];
  selectedOptions: ComboBoxOption[];
  optionRenderer: (option: ComboBoxOption) => React.ReactNode;
  classes: Classes;
}

export default memo(function ComboBox({
  fullWidth = false,
  isClearable = true,
  isDisabled = false,
  isLoading = false,
  showSuggestions = true,
  enableCustomOptions = true,
  required,
  onBlur,
  onChange,
  onFocus,
  onSearchChange,
  placeholder,
  multi = true,
  options: propOptions,
  selectedOptions,
  optionRenderer,
  classes,
}: ComboBoxProps) {
  const defaultOptions = useMemo(() => {
    return propOptions.map((propOption) => ({ ...propOption, id: uuidv4() }));
  }, []);

  const [options, setOptions] = useState(defaultOptions);
  const [filterOptions, setFilterOptions] = useState<ComboBoxOption[]>([]);

  const [showOptions, setShowOptions] = useState(false);

  const [inputText, setInputText] = useState("");

  const onClear = () => {
    onChange && onChange([]);
    setOptions(defaultOptions);
  };

  const onClearOption = (id: string) => {
    onChange && onChange(selectedOptions.filter((option) => option.id !== id));
    const currentOptions = [...options];
    const optionIndexInOptionsArray = defaultOptions.findIndex(
      (option) => option.id == id
    );
    const clearedOption = selectedOptions.find((option) => option.id === id);
    clearedOption &&
      currentOptions.splice(optionIndexInOptionsArray, 0, clearedOption);
    setOptions(currentOptions);
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputText(value);
    if (value) {
      const filteredOptions = options.filter((option) =>
        option?.label.toLowerCase().includes(value)
      );
      setFilterOptions(filteredOptions);
    } else {
      setFilterOptions(options);
    }
    onSearchChange && onSearchChange(value);
  };

  const selectOption = (selectedOption: ComboBoxOption) => {
    multi
      ? onChange([...selectedOptions, selectedOption])
      : onChange([selectedOption]);
    setOptions((options) =>
      (multi ? options : defaultOptions).filter(
        (option) => option.id != selectedOption.id
      )
    );
    setShowOptions(false);
  };

  const handleClickAway = () => {
    setShowOptions(false);
  };

  const addOption = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enableCustomOptions) {
      multi
        ? onChange([...selectedOptions, { label: inputText, id: uuidv4() }])
        : onChange([{ label: inputText, id: uuidv4() }]);
      setInputText("");
    }
  };

  useEffect(() => {
    setFilterOptions(options);
  }, [options]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className={classNames({
          [styles.combobox]: true,
          [styles.fullWidth]: fullWidth,
          [styles.isDisabled]: isDisabled,
          [classes?.combobox]: classes?.combobox,
        })}
        onClick={() => setShowOptions(true)}
      >
        <div
          className={classNames({
            [styles.selectedOptionsWrapper]: true,
            [classes?.selectedOptionsWrapper]: classes?.selectedOptionsWrapper,
          })}
        >
          {selectedOptions.map((option) => (
            <div
              className={classNames({
                [styles.selectedOption]: true,
                [classes?.selectedOption]: classes?.selectedOption,
              })}
            >
              {option.label}
              <div className={styles.closeIconWrapper}>
                <CloseIcon
                  onClick={() => onClearOption(option.id)}
                  className={styles.icon}
                />
              </div>
            </div>
          ))}
          <form onSubmit={addOption} className={styles.inputForm}>
            <input
              type="text"
              className={styles.input}
              onFocus={onFocus}
              value={inputText}
              onBlur={onBlur}
              placeholder={selectedOptions.length ? "" : placeholder}
              onChange={onTextChange}
            />
          </form>
        </div>
        <div className={styles.iconWrapper}>
          {isLoading ? (
            <CircularProgress className={styles.icon} />
          ) : isClearable && selectedOptions.length ? (
            <CloseIcon onClick={onClear} className={styles.icon} />
          ) : null}
        </div>
        {showSuggestions && showOptions && (
          <div
            className={classNames({
              [styles.optionsWrapper]: true,
              [classes?.optionsWrapper]: classes?.optionsWrapper,
            })}
          >
            {filterOptions.map((option) => (
              <div
                className={classNames({
                  [styles.defaultOptionStyle]: !optionRenderer,
                  [styles.option]: true,
                  [classes?.option]: classes?.option,
                })}
                onClick={() => {
                  selectOption(option);
                }}
              >
                {optionRenderer ? optionRenderer(option) : option.label}
              </div>
            ))}
          </div>
        )}
        {required && <InputBase />}
      </div>
    </ClickAwayListener>
  );
});
