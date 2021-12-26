import React from "react";
import styles from "./BottomNavigation.module.css";

import { typeToColorMapping } from "utils";
import classNames from "classnames";

import PropTypes from "prop-types";

export default function BottomNavigation({
  children,
  active,
  classes,
  color,
  onClick,
}) {
  return (
    <div
      className={classNames({
        [styles.bottomNavigation]: true,
        [classes?.bottomNavigation]: classes?.bottomNavigation,
      })}
    >
      {children.map((child, index) => (
        <div
          className={classNames({
            [styles.navMenu]: true,
            [classes?.navMenu]: classes?.navMenu,
            [classes?.active]: classes?.active,
          })}
          onClick={(e) => {
            onClick && onClick(index);
          }}
        >
          {child}
          <div
            className={classNames({
              [typeToColorMapping({ color, variant: "filled" })]: true,
              [styles.line]: true,
              [styles.activeLine]: index == active,
            })}
          ></div>
        </div>
      ))}
    </div>
  );
}

BottomNavigation.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  active: PropTypes.number,
  classes: PropTypes.object,
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "default",
  ]),
  onClick: PropTypes.func,
};

BottomNavigation.defaultProps = {
  active: 0,
  color: "default",
};
