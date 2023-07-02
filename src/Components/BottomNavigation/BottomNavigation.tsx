import React from "react";
import styles from "./BottomNavigation.module.css";

import { typeToColorMapping } from "../../utils";
import classNames from "classnames";
import { Classes, Color } from "../../types";

interface BottomNavigationProps {
  children: React.ReactNode[];
  tabs: React.ReactNode[];
  index?: number;
  classes?: Classes;
  color?: Color;
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
  return (
    <div
      className={classNames(styles.bottomNavigationWrapper, {
        [classes?.bottomNavigationWrapper ?? ""]:
          classes?.bottomNavigationWrapper,
      })}
    >
      <div
        className={classNames(styles.bottomNavigationContentWrapper, {
          [classes?.bottomNavigationContentWrapper ?? ""]:
            classes?.bottomNavigationWrapper,
        })}
      >
        {children?.map((child, idx) => (
          <div
            className={classNames(styles.content, {
              [styles.showContent]: index === idx,
              [styles.hideContent]: index !== idx,
            })}
          >
            {child}
          </div>
        ))}
      </div>
      <div
        className={classNames(styles.bottomNavigation, {
          [classes?.bottomNavigation ?? ""]: classes?.bottomNavigation,
        })}
      >
        {tabs.map((tab, idx) => (
          <div
            className={classNames(styles.navMenu, {
              [classes?.navMenu ?? ""]: classes?.navMenu,
              [classes?.active ?? ""]: classes?.active,
            })}
            onClick={(e) => {
              onClick(idx);
            }}
            data-cy="tab"
          >
            {tab}
            <div
              className={classNames(
                typeToColorMapping({ color, variant: "filled" }),
                styles.line,
                {
                  [styles.activeLine]: idx === index,
                }
              )}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
