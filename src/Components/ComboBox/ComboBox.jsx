import React, { memo, useState, useMemo, useEffect } from "react";
import classNames from "classnames";
import styles from "./ComboBox.module.css";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";

import ClickAwayListener from "react-click-away-listener";

import { v4 as uuidv4 } from "uuid";

export default memo(function ComboBox({
  fullWidth = false,
  isClearable = true,
  isDisabled = false,
  isLoading = false,
  showSuggestions = true,
  enableCustomOptions = true,
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
}) {
  const defaultOptions = useMemo(() => {
    return propOptions.map((propOption) => ({ ...propOption, id: uuidv4() }));
  }, []);

  const [options, setOptions] = useState(defaultOptions);
  const [filterOptions, setFilterOptions] = useState([]);

  const [showOptions, setShowOptions] = useState(false);

  const [inputText, setInputText] = useState("");

  const onClear = () => {
    onChange && onChange([]);
    setOptions(defaultOptions);
  };

  const onClearOption = (id) => {
    onChange && onChange(selectedOptions.filter((option) => option.id != id));
    const currentOptions = [...options];
    const optionIndexInOptionsArray = defaultOptions.findIndex(
      (option) => option.id == id
    );
    const clearedOption = selectedOptions.find((option) => option.id == id);
    currentOptions.splice(optionIndexInOptionsArray, 0, clearedOption);
    setOptions(currentOptions);
  };

  const onTextChange = (e) => {
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

  const selectOption = (selectedOption) => {
    onChange && multi
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

  const addOption = (e) => {
    e.preventDefault();
    if (enableCustomOptions) {
      onChange && multi
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
          [styles.disabled]: isDisabled,
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
          ) : isClearable ? (
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
      </div>
    </ClickAwayListener>
  );
});
