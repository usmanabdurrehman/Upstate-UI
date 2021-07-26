import React, { useState, useRef, useEffect } from "react";
import styles from "./Tabs.module.css";

import { classNames } from "utils";

import PropTypes from "prop-types";

export default function Tabs({ children, titles }) {
  const [selected, setSelected] = useState(
    titles.map((title, index) => (index == 0 ? true : false))
  );

  const [height, setHeight] = useState(0);

  // const childrenRef = children.map(child => useRef(null));

  useEffect(() => {
    // let maxHeight = Math.max(...childrenRef.map(child=>child.clientHeight))
    // console.log(maxHeight)
    // setHeight(maxHeight)
  }, []);

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabs}>
        {titles.map((title, index) => (
          <div
            className={classNames({
              [styles.tab]: true,
              [styles.selected]: selected[index],
            })}
            onClick={(_) =>
              setSelected([
                ...selected.map((tab, tabIndex) =>
                  index == tabIndex ? true : false
                ),
              ])
            }
          >
            {title}
          </div>
        ))}
      </div>
      <div className={styles.contentWrapper} style={{ height }}>
        {children.map((child, index) => (
          <div
            className={styles.content}
            style={{
              left: `${(index - selected.findIndex((sel) => sel)) * 100}%`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  children:PropTypes.node,
  titles:PropTypes.arrayOf(PropTypes.string)
}
