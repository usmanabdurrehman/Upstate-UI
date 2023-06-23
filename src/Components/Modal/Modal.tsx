import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";

import ClickAwayListener from "react-click-away-listener";

interface ModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
}

export default function Modal({
  children,
  isOpen = false,
  onClose,
}: ModalProps) {
  let [open, setOpen] = useState(isOpen || false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  let handleClickAway = () => {
    setOpen(false);
    onClose();
  };

  if (!open) return null;

  return (
    <div className={styles.modalWrapper}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className={styles.modal}>{children}</div>
      </ClickAwayListener>
      <div className={styles.backdrop}></div>
    </div>
  );
}
