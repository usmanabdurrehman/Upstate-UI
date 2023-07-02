import React from "react";
import styles from "./Accordion.module.css";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import classNames from "classnames";

import globalStyles from "../../styles/global.module.css";
import { Classes } from "../../types";

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_animate

// Have to check the condition placed for expanded

interface AccordionProps {
  content: React.ReactNode;
  title: React.ReactNode;
  disabled?: boolean;
  expanded?: boolean;
  onClick?: (isExpaneded: boolean) => void;
  classes?: Classes;
}

export default function Accordion({
  content,
  title,
  disabled = false,
  onClick,
  expanded = false,
  classes,
}: AccordionProps) {
  return (
    <div
      className={classNames({
        [styles.accordion]: true,
        [styles.accordionOpen]: expanded,
        [globalStyles.disabled]: disabled,
        [classes?.accordionWrapper ?? ""]: classes?.accordionWrapper,
      })}
    >
      <div
        className={classNames({
          [styles.title]: true,
          [globalStyles.disabled]: disabled,
          [classes?.accordionTitle ?? ""]: classes?.accordionTitle,
        })}
        onClick={() => {
          !disabled && onClick && onClick(!expanded);
        }}
        data-cy="accordion-button"
      >
        <p>{title}</p>
        <ExpandMoreIcon
          className={classNames({
            [styles.arrow]: true,
            [styles.invert]: expanded,
            [classes?.accordionIcon ?? ""]: classes?.accordionIcon,
          })}
        />
      </div>
      {expanded && (
        <div
          className={classNames({
            [styles.content]: true,
            [classes?.accordionContent ?? ""]: classes?.accordionContent,
          })}
        >
          {content}
        </div>
      )}
    </div>
  );
}
