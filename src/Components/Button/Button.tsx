import React from "react";
import styles from "./Button.module.css";

import { typeToColorMapping } from "../../utils";

import classNames from "classnames";
import { Classes, Color, Size, Variant } from "../../types";

interface ButtonProps {
  color?: Color;
  variant?: Variant;
  children: React.ReactNode;
  size?: Size;
  fullWidth?: boolean;
  classes?: Classes;
  isLoading?: boolean;
  onClick: () => void;
  href?: string;
}

export default function Button({
  children,
  color = "default",
  variant = "outlined",
  size = "sm",
  fullWidth = false,
  classes,
  onClick,
  isLoading = false,
  href,
  ...rest
}: ButtonProps) {
  let typeToSizeMapper = (size: Size) => {
    let typeToSizeMapper = {
      sm: styles.buttonSmall,
      md: styles.buttonMedium,
      lg: styles.buttonLarge,
    };
    return typeToSizeMapper[size] || typeToSizeMapper.sm;
  };

  const Button = (
    <button
      onClick={() => {
        !isLoading && onClick && onClick();
      }}
      className={classNames({
        [styles.button]: true,
        [typeToSizeMapper(size)]: true,
        [typeToColorMapping({ color, variant })]: true,
        [styles.fullWidth]: fullWidth,
        [classes?.button ?? ""]: !!classes?.button,
      })}
      {...rest}
    >
      <div
        className={classNames({
          [variant == "outlined"
            ? typeToColorMapping({ color, variant: "filled" })
            : styles.buttonWhiteRibbon]: true,
          [styles.buttonActiveRibbon]: true,
          [styles.isLoading]: isLoading,
        })}
      ></div>
      <div className={styles.buttonContent}>{children}</div>
    </button>
  );

  return href ? <a href={href}>{Button}</a> : Button;
}
