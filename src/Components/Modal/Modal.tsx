import React from "react";
import styles from "./Modal.module.css";

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
  if (!isOpen) return null;

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>{children}</div>
      <div className={styles.backdrop}></div>
    </div>
  );
}
