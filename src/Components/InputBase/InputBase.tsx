import React from "react";
import styles from "./InputBase.module.css";

export default function InputBase(props: Omit<HTMLInputElement, "className">) {
  return <input className={styles.requiredInput} {...props} />;
}
