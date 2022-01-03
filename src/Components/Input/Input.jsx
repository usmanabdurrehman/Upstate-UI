import React from "react";
import styles from "./Input.module.css";

export default function Input({ classes, onChange, ...rest }) {
  return <input {...rest} onChange={(e) => onChange(e.target.value)} />;
}
