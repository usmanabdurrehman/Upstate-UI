import React, { useState, useEffect, useRef } from "react";
import styles from "./Table.module.css";

import { getThemeStyles } from "../../utils";

import PropTypes from "prop-types";
import { Classes } from "../../types";

interface TableProps {
  data: any[];
  columns: string[];
  customWidgets: any;
  customStyles: Classes;
  theme: "tree" | "aquamarine" | "navy";
  options?: { paginationLimit?: number };
}

export default function Table({
  data: Data,
  columns,
  customWidgets,
  customStyles = {},
  theme,
  options,
}: TableProps) {
  const { paginationLimit } = { paginationLimit: 40, ...options };

  const themeStyles = getThemeStyles(theme, customStyles);

  const tableRef = useRef(null);

  let [currentPage, setCurrentPage] = useState(1);

  const dataColumns = Object.keys(Data[0]);
  const [tableColumns, setTableColumns] = useState([
    "Serial#",
    ...(columns || dataColumns),
  ]);
  const [filterColumns, setFilterColumns] = useState(tableColumns);

  const [data, setData] = useState(
    Data.map((obj, index) => {
      let tempObj = {};
      filterColumns.forEach((column) => {
        tempObj[column] = obj[column];
      });
      tempObj["Serial#"] = index + 1;
      return tempObj;
    })
  );

  const [paginationData, setPaginationData] = useState(
    data.length > paginationLimit ? data.slice(0, paginationLimit) : data
  );

  let getNumberOfPages = () => {
    let number = 1;
    let difference = data.length;

    while (difference > paginationLimit) {
      difference -= paginationLimit;
      number += 1;
    }
    return number;
  };

  let displayPaginationData = (number) => {
    setPaginationData([
      ...data.slice(
        number * paginationLimit - paginationLimit,
        data.length > number * paginationLimit
          ? number * paginationLimit
          : data.length
      ),
    ]);
    setCurrentPage(number);
  };

  if (columns.find((column) => !dataColumns.includes(column))) {
    throw new Error("Column name does not exist. Check for spelling mistakes");
  }

  if (paginationLimit > Data.length) {
    throw new Error(
      `The pagination limit(${paginationLimit}) cannot be greater than the number of items in the data array(${Data.length})`
    );
  }

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
          {tableColumns.map((heading, index) => (
            <th draggable="true">
              <div>
                <p>{heading}</p>{" "}
              </div>
            </th>
          ))}
        </tr>
        {paginationData.map((row, index) => (
          <tr
            className={styles.row}
            style={{
              order: index + 1,
              ...(themeStyles.options.stripedRows &&
                index % 2 != 0 && {
                  backgroundColor: themeStyles.stripedRowsBackground,
                  color: themeStyles.stripedRowsColor,
                }),
            }}
          >
            {tableColumns.map((column) => (
              <td>
                {customWidgets[column]
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
