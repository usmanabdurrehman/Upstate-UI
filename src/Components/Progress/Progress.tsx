import styles from "./Progress.module.css";

import { typeToColorMapping } from "../../utils";

import classNames from "classnames";
import { Classes, Color } from "../../types";

interface ProgressProps {
  color?: Color;
  progress: number;
  classes: Classes;
}

export default function Progress({
  color = "default",
  progress,
  classes,
}: ProgressProps) {
  return (
    <div
      className={classNames({
        [styles.progressWrapper]: true,
        [classes?.progressWrapper]: [classes?.progressWrapper],
      })}
    >
      <div
        className={classNames({
          [styles.progress]: true,
          [typeToColorMapping({ color })]: true,
          [classes?.progress]: classes?.progress,
        })}
        style={{
          width: `${progress}%`,
        }}
      ></div>
      <div
        className={classNames({
          [styles.remaining]: true,
          [classes?.remaining]: [classes?.remaining],
        })}
        style={{ width: `calc(${100 - progress}% + 10px)` }}
      ></div>
    </div>
  );
}
