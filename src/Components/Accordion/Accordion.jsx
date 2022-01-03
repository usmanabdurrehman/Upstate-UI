import React from "react";
import styles from "./Accordion.module.css";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PropTypes from "prop-types";

import classNames from "classnames";

import globalStyles from "styles/global.module.css";

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_animate

// Have to check the condition placed for expanded

export default function Accordion({
  content,
  title,
  disabled,
  onClick,
  expanded,
  classes,
}) {
  return (
    <div
      className={classNames({
        [styles.accordion]: true,
        [styles.accordionOpen]: expanded,
        [globalStyles.disabled]: disabled,
        [classes?.accordionWrapper]: classes?.accordionWrapper,
      })}
    >
      <div
        className={classNames({
          [styles.title]: true,
          [globalStyles.disabled]: disabled,
          [classes?.accordionTitle]: classes?.accordionTitle,
        })}
        onClick={() => {
          !disabled && onClick && onClick(expanded);
        }}
      >
        <p>{title}</p>
        <ExpandMoreIcon
          className={classNames({
            [styles.arrow]: true,
            [styles.invert]: expanded,
            [classes?.accordionIcon]: classes?.accordionIcon,
          })}
        />
      </div>
      <div
        className={classNames({
          [styles.content]: true,
          [classes?.accordionContent]: classes?.accordionContent,
        })}
      >
        {content}
      </div>
    </div>
  );
}

Accordion.propTypes = {
  content: PropTypes.node,
  title: PropTypes.node,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  classes: PropTypes.object,
};

Accordion.defaultProps = {
  disabled: false,
};
