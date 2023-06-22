import React from "react";

import styles from "./Badge.module.css";

import { typeToColorMapping, anchorOriginToClassMapper } from "../../utils";

import classNames from "classnames";
import { Classes, Color } from "../../types";

interface BadgeProps {
  anchorOrigin?: { horizontal: string; vertical: string };
  variant: "standard" | "dot";
  color: Color;
  number: number;
  max: number;
  showZero: boolean;
  invisible: boolean;
  classes: Classes;
  children: React.ReactNode;
}

export default function Badge({
  anchorOrigin = { horizontal: "right", vertical: "top" },
  variant,
  color = "default",
  number,
  max = 99,
  invisible = false,
  showZero = false,
  classes,
  children,
}: BadgeProps) {
  if (!number && variant != "dot") {
    throw new Error("A number must be supplied for displaying the badge");
  }

  return (
    <div className={styles.badgeWrapper}>
      {!invisible && (number === 0 ? showZero : true) && (
        <div
          className={classNames({
            [styles.badge]: true,
            [styles.dotBadge]: variant == "dot",
            [anchorOriginToClassMapper(anchorOrigin)]: true,
            [typeToColorMapping({ color })]: true,
            [classes?.badge]: classes?.badge,
          })}
        >
          {variant != "dot" && Math.min(number, max)}
        </div>
      )}
      <div className={styles.badgeContent}>{children}</div>
    </div>
  );
}
