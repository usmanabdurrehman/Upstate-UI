import React from "react";
import styles from "./BreadCrumbs.module.css";

interface BreadCrumbs {
  children: React.ReactNode;
}

// TODO:
export default function BreadCrumbs({ children }: BreadCrumbs) {
  return <div className={styles.breadCrumbs}></div>;
}
