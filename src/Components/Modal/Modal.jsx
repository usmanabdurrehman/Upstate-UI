import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";

import ClickAwayListener from "react-click-away-listener";

import PropTypes from "prop-types";

export default function Modal({ children, isOpen, onClose }) {
  let [open, setOpen] = useState(isOpen || false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  let handleClickAway = () => {
    setOpen(false);
    onClose && onClose();
  };

  return (
    open && (
      <div className={styles.modalWrapper}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={styles.modal}>{children}</div>
        </ClickAwayListener>
        <div className={styles.backdrop}></div>
      </div>
    )
  );
}

Modal.propTypes = {
  children:PropTypes.node,
  isOpen:PropTypes.bool,
  onClose:PropTypes.func
};

Modal.defaultProps = {
  isOpen:false
};