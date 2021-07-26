import React, { useState } from "react";
import styles from "./Switch.module.css";

import PropTypes from "prop-types";

import { classNames, typeToColorMapping, returnDefault } from "utils";

export default function Switch({ onChange, color, classes }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={classNames({
        [styles.switch]: true,
        [styles[`switchBG-${returnDefault({color})}`]]:clicked,
        [classes?.switchBG]:classes?.switchBG
      })}
      onClick={(e) => {
        setClicked(!clicked);
        onChange && onChange(clicked);
      }}
    >
      <div
        className={classNames({
          [styles.switchCircle]: true,
          [styles.switchClicked]: clicked,
          [styles.switchUnclicked]:!clicked,
          [typeToColorMapping({ color })]: clicked,
          [classes?.switchCircle]:classes?.switchCircle
        })}
      ></div>
    </div>
  );
}

Switch.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "default",
  ]),
  onChange:PropTypes.func
};

Switch.defaultProps = {
  color: "default",
};
