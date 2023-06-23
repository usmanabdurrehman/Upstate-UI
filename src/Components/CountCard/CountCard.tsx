import styles from "./CountCard.module.css";

import { typeToColorMapping } from "../../utils";

import classNames from "classnames";
import { Classes, Color } from "../../types";

interface CountCardProps {
  number: number;
  text: string;
  color?: Color;
  width: number;
  height: number;
  classes?: Classes;
}

export default function CountCard({
  number,
  text,
  color = "default",
  width,
  height,
  classes,
}: CountCardProps) {
  return (
    <div className={styles.card} style={{ width, height }}>
      <div
        className={classNames({
          [styles.hoverLineTop]: true,
          [typeToColorMapping({ color })]: true,
          [classes?.hoverLine ?? ""]: classes?.hoverLine,
        })}
      ></div>
      <h1
        className={classNames({
          [classes?.number ?? ""]: classes?.number,
        })}
      >
        {number}
      </h1>
      <div
        className={classNames({
          [classes?.text ?? ""]: classes?.text,
        })}
      >
        {text}
      </div>
    </div>
  );
}
