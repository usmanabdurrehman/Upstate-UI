import React from "react";

import styles from "./Badge.module.css";

import { typeToColorMapping, anchorOriginToClassMapper } from "../../utils";

import classNames from "classnames";
import { Classes, Color, Direction } from "../../types";

interface BadgeProps {
  anchorOrigin?: { horizontal: Direction; vertical: Direction };
  variant?: "standard" | "dot";
  color?: Color;
  number?: number;
  max?: number;
  showZero?: boolean;
  classes?: Classes;
  children: React.ReactNode;
}

export default function Badge({
  anchorOrigin = { horizontal: "right", vertical: "top" },
  variant = "standard",
  color = "default",
  number,
  max = 99,
  showZero = false,
  classes,
  children,
}: BadgeProps) {
  return (
    <div className={styles.badgeWrapper} data-cy="badge">
      {(number === 0 ? showZero : true) && (
        <div
          className={classNames({
            [styles.badge]: true,
            [styles.dotBadge]: variant === "dot",
            [anchorOriginToClassMapper(anchorOrigin)]: true,
            [typeToColorMapping({ color })]: true,
            [classes?.badge ?? ""]: classes?.badge,
          })}
          data-cy="badge-content"
        >
          {variant !== "dot" && number && Math.min(number, max)}
        </div>
      )}
      <div className={styles.badgeContent}>{children}</div>
    </div>
  );
}
