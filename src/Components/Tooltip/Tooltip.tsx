import React from "react";
import styles from "./Tooltip.module.css";

interface TooltipProps {
  children: React.ReactNode[];
  title: string;
}

export default function Tooltip({ children, title }: TooltipProps) {
  return (
    <div className={styles.tooltipWrapper}>
      <div className={styles.tooltip}>{title}</div>
      <div className={styles.tooltipContent}>{children}</div>
    </div>
  );
}
