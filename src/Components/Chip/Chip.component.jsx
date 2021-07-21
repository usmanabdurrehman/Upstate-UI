import React from "react";
import styles from "./Chip.module.css";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

export default function Chip({ label, type, variant }) {
  return (
    <div className={styles.chip} style={typeToColorMapping({type, variant})}>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

Chip.propTypes = {
  type: PropTypes.oneOf(["primary", "success", "warning", "danger", "default"]),
  variant: PropTypes.oneOf(["filled", "outlined"]),
  label: PropTypes.string,
};

Chip.defaultProps = {
  type: "default",
  variant: "outlined",
  label: "default",
};
