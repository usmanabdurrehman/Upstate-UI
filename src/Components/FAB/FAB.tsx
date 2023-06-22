import React, { useState } from "react";
import styles from "./FAB.module.css";

import { typeToColorMapping } from "../../utils";

import classNames from "classnames";
import { Classes, Color, Variant } from "../../types";

interface FABProps {
  children: React.ReactNode[];
  color: Color;
  disabled?: boolean;
  variant?: Variant;
  classes: Classes;
  onClick: () => void;
  href?: string;
}

export default function FAB({
  children,
  color = "default",
  variant = "outlined",
  disabled = false,
  classes,
  onClick,
  href,
}: FABProps) {
  const Button = (
    <button
      onClick={onClick}
      className={classNames({
        [styles.button]: true,
        [typeToColorMapping({ color, variant })]: true,
        [styles.disabled]: disabled,
        [classes?.FAB]: classes?.FAB,
      })}
    >
      <div
        className={classNames({
          [variant == "outlined"
            ? typeToColorMapping({ color, variant: "filled" })
            : styles.buttonWhiteRibbon]: true,
          [styles.buttonActiveRibbon]: true,
          [styles.buttonActiveRibbonBottom]: true,
        })}
      ></div>
      <div
        className={classNames({
          [variant == "outlined"
            ? typeToColorMapping({ color, variant: "filled" })
            : styles.buttonWhiteRibbon]: true,
          [styles.buttonActiveRibbon]: true,
          [styles.buttonActiveRibbonTop]: true,
        })}
      ></div>
      <div className={styles.buttonContent}>{children}</div>
    </button>
  );

  return href ? <a href={href}>{Button}</a> : Button;
}
