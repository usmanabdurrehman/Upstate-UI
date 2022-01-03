import React from "react";
import styles from "./Alert.module.css";

import ClearIcon from "@material-ui/icons/Clear";

import PropTypes from "prop-types";

import { returnDefault } from "utils";

import classNames from "classnames";

export default function Alert({ color, text, showAlert, classes, onClose }) {
  return (
    <div
      className={classNames({
        [styles.alertWrapper]: true,
      })}
    >
      <div
        className={classNames({
          [styles.alert]: true,
          [styles.showAlert]: showAlert,
          [styles[`alert-${returnDefault({ color })}`]]: true,
          [classes?.alert]: classes?.alert,
        })}
      >
        <img src={`/icons/alert-${color}.svg`} className={styles.alertIcon} />
        <p className={styles.alertText}>{text}</p>
        <ClearIcon className={styles.icon} onClick={onClose} />
      </div>
    </div>
  );
}

Alert.propTypes = {
  color: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
  text: PropTypes.string,
  showAlert: PropTypes.bool,
  classes: PropTypes.object,
};

Alert.defaultProps = {
  color: "default",
  showAlert: false,
};
