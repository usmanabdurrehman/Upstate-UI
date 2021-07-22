import React, { useState } from "react";
import styles from "./FAB.module.css";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping } from "utils";

export default function FAB({ children, color, variant, onClick }) {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => {
        setClicked(true);
        onClick && onClick();
      }}
      className={classNames({
        [styles.button]: true,
        [styles.buttonAnimation]: clicked,
      })}
      onAnimationEnd={() => {
        setClicked(false);
      }}
      style={typeToColorMapping({ color, variant })}
    >
      {children}
    </button>
  );
}

FAB.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "default",
  ]),
  variant: PropTypes.oneOf(["filled", "outlined"]),
};

FAB.defaultProps = {
  color: "default",
  variant: "outlined",
  children: "+",
};
