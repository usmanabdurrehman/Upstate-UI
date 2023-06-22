import React from "react";
import styles from "./BottomNavigation.module.css";

import { typeToColorMapping } from "../../utils";
import classNames from "classnames";
import { Classes, Color } from "../../types";

interface BottomNavigationProps {
  children: React.ReactNode[];
  tabs: React.ReactNode[];
  index: number;
  classes: Classes;
  color: Color;
  onClick: (index: number) => void;
}

export default function BottomNavigation({
  children,
  tabs,
  index = 0,
  classes,
  color = "default",
  onClick,
}: BottomNavigationProps) {
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
          [classes?.bottomNavigationContentWrapper]:
            classes?.bottomNavigationWrapper,
        })}
      >
        {children?.map((child, idx) => (
          <div
            className={classNames({
              [styles.content]: true,
              [styles.showContent]: index === idx,
              [styles.hideContent]: index !== idx,
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
        {tabs.map((child, idx) => (
          <div
            className={classNames({
              [styles.navMenu]: true,
              [classes?.navMenu]: classes?.navMenu,
              [classes?.active]: classes?.active,
            })}
            onClick={(e) => {
              onClick && onClick(idx);
            }}
          >
            {child}
            <div
              className={classNames({
                [typeToColorMapping({ color, variant: "filled" })]: true,
                [styles.line]: true,
                [styles.activeLine]: idx == index,
              })}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
