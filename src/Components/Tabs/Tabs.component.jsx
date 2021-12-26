import React, { useState, useEffect } from "react";
import styles from "./Tabs.module.css";

import PropTypes from "prop-types";

export default function Tabs({ children, titles, selectedIndex, isConcierge }) {
  const [selected, setSelected] = useState(selectedIndex || 0);

  useEffect(() => {
    setSelected((selected) => selectedIndex || selected);
  }, [selectedIndex]);

  return (
    <div className={styles.tabsWrapper}>
      <div
        className={`${styles.tabs} ${isConcierge ? styles.isConcierge : ""}`}
      >
        {titles.map((title, index) => (
          <div
            className={`${styles.tab} ${
              selected == index ? styles.selected : ""
            }`}
            onClick={(_) => setSelected(index)}
          >
            {title}
          </div>
        ))}
      </div>
      <div className={styles.contentWrapper}>
        {children.map((child, index) => (
          <div
            className={`${styles.content} ${
              selected == index ? styles.showContent : styles.hideContent
            }`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  children: PropTypes.node,
  titles: PropTypes.arrayOf(PropTypes.string),
};
