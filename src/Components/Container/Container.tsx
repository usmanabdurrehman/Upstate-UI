import React from "react";
import styles from "./Container.module.css";

import classNames from "classnames";

import PropTypes from "prop-types";
import { Classes, Size } from "../../types";

// Have to convert these inline styles to classes

interface ContainerProps {
  children: React.ReactNode[];
  classes: Classes;
  maxWidth?: Size;
  disableGutters?: boolean;
}

export default function Container({
  children,
  classes,
  maxWidth = "lg",
  disableGutters = false,
}: ContainerProps) {
  let maxWidthMapper = (maxWidth: Size) => {
    let maxWidthMapper = {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    };
    return maxWidthMapper[maxWidth] || maxWidthMapper.lg;
  };

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [classes?.container]: classes?.container,
      })}
      style={{
        maxWidth: maxWidthMapper(maxWidth),
        padding: disableGutters ? 0 : "0 16px",
      }}
    >
      {children}
    </div>
  );
}
