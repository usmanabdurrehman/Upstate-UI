import React from "react";
import styles from "./Alert.module.css";

import ClearIcon from "@material-ui/icons/Clear";

import PropTypes from "prop-types";

import {
  returnDefault,
  severityToColorMapper,
  typeToColorMapping,
} from "utils";

import classNames from "classnames";

export default function Alert({
  icon,
  iconMapping,
  severity,
  text,
  showAlert,
  classes,
  onClose,
  variant,
}) {
  console.log(
    typeToColorMapping({
      color: severityToColorMapper(severity),
      variant,
    })
  );

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
          // [styles[
          //   `alert-${returnDefault({
          //     color: severityToColorMapper(severity),
          //   })}`
          // ]]: true,
          [typeToColorMapping({
            color: severityToColorMapper(severity),
            variant,
          })]: true,
          [classes?.alert]: classes?.alert,
        })}
      >
        {icon || (iconMapping && iconMapping?.[severity]) || (
          <img
            src={`/icons/alert-${severityToColorMapper(severity)}.svg`}
            className={styles.alertIcon}
          />
        )}
        <p className={styles.alertText}>{text}</p>
        <ClearIcon className={styles.icon} onClick={onClose} />
      </div>
    </div>
  );
}

Alert.propTypes = {
  severity: PropTypes.oneOf(["error", "info", "success", "warning"]),
  variant: PropTypes.oneOf(["outlined", "filled"]),
  text: PropTypes.string,
  showAlert: PropTypes.bool,
  classes: PropTypes.object,
};

Alert.defaultProps = {
  severity: "info",
  showAlert: false,
};
