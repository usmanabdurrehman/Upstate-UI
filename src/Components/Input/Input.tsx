import React from "react";
import styles from "./Input.module.css";

// TODO: Make it like Materials Input

export default function Input({ onChange, ...rest }: HTMLInputElement) {
  return <input {...rest} onChange={(e) => onChange(e.target.value)} />;
}
