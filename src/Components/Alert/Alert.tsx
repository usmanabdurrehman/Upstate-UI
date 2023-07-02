import React from "react";
import styles from "./Alert.module.css";

import ClearIcon from "@material-ui/icons/Clear";

import { severityToColorMapper, typeToColorMapping } from "../../utils";

import classNames from "classnames";
import { Classes, Severity, Variant } from "../../types";

interface AlertProps {
  severity?: Severity;
  icon?: React.ReactNode;
  iconMapping?: { [severity: string]: React.ReactNode };
  text: string;
  showAlert?: boolean;
  classes?: Classes;
  onClose?: () => void;
  variant?: Variant;
}

export default function Alert({
  icon,
  iconMapping,
  severity = "info",
  text,
  showAlert = false,
  classes,
  onClose,
  variant = "outlined",
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
          [classes?.alert ?? ""]: classes?.alert,
        })}
      >
        {icon || (iconMapping && iconMapping?.[severity]) || (
          <img
            src={`/icons/alert/${severityToColorMapper(severity)}.svg`}
            className={styles.alertIcon}
            data-cy="default-severity-icon"
            style={{
              filter:
                variant === "filled"
                  ? "invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)"
                  : undefined,
            }}
          />
        )}
        <p className={styles.alertText}>{text}</p>
        {onClose && (
          <span data-cy="close-icon" onClick={onClose}>
            <ClearIcon className={styles.icon} />
          </span>
        )}
      </div>
    </div>
  );
}
