import React from "react";
import styles from "./Chip.module.css";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

export default function Chip({ label, color, variant }) {
  return (
    <div className={styles.chip} style={typeToColorMapping({ color, variant })}>
      <div className={styles.label}>{label}</div>
    </div>
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
};

Chip.defaultProps = {
  color: "default",
  variant: "outlined",
  label: "default",
};
