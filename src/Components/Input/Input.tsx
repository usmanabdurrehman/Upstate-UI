import React from "react";
import styles from "./Input.module.css";

export default function Input({ onChange, ...rest }: HTMLInputElement) {
  return <input {...rest} onChange={(e) => onChange(e.target.value)} />;
}
