import React, { useState, useRef, useMemo } from "react";
import styles from "./Table.module.css";

import { getThemeStyles } from "../../utils";

import { Classes, Theme } from "../../types";

interface TableProps {
  data: any[];
  customWidgets?: { [id: string]: (value: any) => React.ReactNode };
  customStyles?: Classes;
  theme?: Theme;
}

export default function Table({
  data,
  customWidgets,
  customStyles = {},
  theme = "navy",
}: TableProps) {
  const themeStyles = getThemeStyles(theme, customStyles);

  const tableRef = useRef(null);

  const columns = useMemo(() => Object.keys(data?.[0]), [data]);

  return (
    <div className={styles.tableWrapper} ref={tableRef}>
      <table className={`${styles.table}`}>
        <tr
          className={styles.headerRow}
          style={{
            backgroundColor: themeStyles.headerBackground,
            color: themeStyles.headerColor,
          }}
        >
          {columns.map((heading) => (
            <th>{heading}</th>
          ))}
        </tr>
        {data.map((row, index) => (
          <tr
            className={styles.row}
            style={{
              order: index + 1,
              ...(themeStyles.options.stripedRows &&
                index % 2 !== 0 && {
                  backgroundColor: themeStyles.stripedRowsBackground,
                  color: themeStyles.stripedRowsColor,
                }),
            }}
          >
            {columns.map((column) => (
              <td>
                {!!customWidgets?.[column]
                  ? customWidgets[column](row[column])
                  : row[column]}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
