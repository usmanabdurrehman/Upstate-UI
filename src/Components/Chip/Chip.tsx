import styles from "./Chip.module.css";

import { typeToColorMapping } from "../../utils";
import classNames from "classnames";
import CancelIcon from "@material-ui/icons/Cancel";
import { Color, Variant } from "../../types";

interface ChipProps {
  label: string;
  color?: Color;
  variant?: Variant;
  clickable?: boolean;
  disabled?: boolean;
  classes?: { [id: string]: string };
  avatar?: JSX.Element;
  deleteIcon?: JSX.Element;
  onClick?: () => void;
  onDelete?: () => void;
}

export default function Chip({
  label,
  color = "default",
  clickable = true,
  disabled = false,
  variant = "outlined",
  classes,
  avatar,
  deleteIcon,
  onClick,
  onDelete,
}: ChipProps) {
  return (
    <button
      className={classNames({
        [styles.chip]: true,
        [typeToColorMapping({ color, variant })]: true,
        [styles.clickable]: clickable,
        [styles.disabled]: disabled,
        [classes?.chip ?? ""]: classes?.chip,
      })}
      onClick={onClick}
    >
      {clickable && (
        <div
          className={classNames({
            [variant === "outlined"
              ? typeToColorMapping({ color, variant: "filled" })
              : styles.buttonWhiteRibbon]: true,
            [styles.buttonActiveRibbon]: true,
          })}
          data-cy="chip-ribbon"
        />
      )}
      {avatar && (
        <div className={styles.avatarWrapper} data-cy="avatar">
          {avatar}
        </div>
      )}
      <div
        className={classNames({
          [styles.chipContent]: true,
          [styles.leftGap]: avatar,
        })}
      >
        {label}
      </div>
      {onDelete && (
        <div
          className={classNames({
            [styles.deleteIconWrapper]: true,
            [styles.leftGap]: true,
          })}
          onClick={onDelete}
          data-cy="delete-icon"
        >
          {deleteIcon || <CancelIcon />}
        </div>
      )}
    </button>
  );
}
