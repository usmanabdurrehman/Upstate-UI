import React from "react";
import styles from "./Alert.module.css";

import ClearIcon from "@material-ui/icons/Clear";

import { severityToColorMapper, typeToColorMapping } from "../../utils";

import classNames from "classnames";
import { Classes, Severity, Variant } from "../../types";

interface AlertProps {
  severity?: Severity;
  icon: React.ReactNode;
  iconMapping: { [severity: string]: React.ReactNode };
  text: string;
  showAlert?: boolean;
  classes: Classes;
  onClose: () => void;
  variant: Variant;
}

export default function Alert({
  icon,
  iconMapping,
  severity = "info",
  text,
  showAlert = false,
  classes,
  onClose,
  variant,
}: AlertProps) {
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
