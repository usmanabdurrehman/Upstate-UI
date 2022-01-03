import React from "react";
import styles from "./BottomNavigation.module.css";

import { typeToColorMapping } from "utils";
import classNames from "classnames";

import PropTypes from "prop-types";

export default function BottomNavigation({
  children,
  tabs,
  index: selectedIndex,
  classes,
  color,
  onClick,
}) {
  if (children.length != tabs.length) {
    throw new Error("Length of children and tabs should be the same");
  }
  return (
    <div
      className={classNames({
        [styles.bottomNavigationWrapper]: true,
        [classes?.bottomNavigationWrapper]: classes?.bottomNavigationWrapper,
      })}
    >
      <div
        className={classNames({
          [styles.bottomNavigationContentWrapper]: true,
          [classes?.bottomNavigationContentWrapper]: classes?.bottomNavigationWrapper,
        })}
      >
        {children.map((child, index) => (
          <div
            className={classNames({
              [styles.content]: true,
              [styles.showContent]: selectedIndex === index,
              [styles.hideContent]: selectedIndex !== index,
            })}
          >
            {child}
          </div>
        ))}
      </div>
      <div
        className={classNames({
          [styles.bottomNavigation]: true,
          [classes?.bottomNavigation]: classes?.bottomNavigation,
        })}
      >
        {tabs.map((child, index) => (
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
                [styles.activeLine]: index == selectedIndex,
              })}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

BottomNavigation.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.node),
  index: PropTypes.number,
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
  index: 0,
  color: "default",
};
