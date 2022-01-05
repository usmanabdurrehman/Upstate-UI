import React from "react";
import styles from "./Chip.module.css";

import PropTypes from "prop-types";

import { typeToColorMapping } from "utils";

import classNames from "classnames";

import CancelIcon from "@material-ui/icons/Cancel";

export default function Chip({
  label,
  color,
  clickable,
  disabled,
  variant,
  classes,
  avatar,
  deleteIcon,
  onClick,
  onDelete,
}) {
  return (
    <button
      className={classNames({
        [styles.chip]: true,
        [typeToColorMapping({ color, variant })]: true,
        [styles.clickable]: clickable,
        [styles.disabled]: disabled,
        [classes?.chip]: classes?.chip,
      })}
      onClick={onClick}
    >
      {clickable && (
        <div
          className={classNames({
            [variant == "outlined"
              ? typeToColorMapping({ color, variant: "filled" })
              : styles.buttonWhiteRibbon]: true,
            [styles.buttonActiveRibbon]: true,
          })}
        ></div>
      )}
      {avatar && <div className={styles.avatarWrapper}>{avatar}</div>}
      <div
        className={classNames({
          [styles.chipContent]: true,
          [styles.leftGap]: avatar,
        })}
      >
        {label}
      </div>
      {onDelete && (
        <div
          className={classNames({
            [styles.deleteIconWrapper]: true,
            [styles.leftGap]: true,
          })}
          onClick={onDelete}
        >
          {deleteIcon || <CancelIcon />}
        </div>
      )}
    </button>
  );
}

Chip.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "default",
  ]),
  variant: PropTypes.oneOf(["filled", "outlined"]),
  label: PropTypes.string,
  clickable: PropTypes.bool,
  disabled: PropTypes.bool,
  classes: PropTypes.object,
};

Chip.defaultProps = {
  color: "default",
  variant: "outlined",
  clickable: true,
  disabled: false,
};
