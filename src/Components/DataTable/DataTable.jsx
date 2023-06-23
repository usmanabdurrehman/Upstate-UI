import React, { useState, useEffect, useRef } from "react";

import styles from "./DataTable.module.css";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import GetAppIcon from "@material-ui/icons/GetApp";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import SearchIcon from "@material-ui/icons/Search";
import PrintIcon from "@material-ui/icons/Print";

import Popover from "@material-ui/core/Popover";
import { IconButton, Checkbox } from "@material-ui/core";

import { createCSV } from "./DataTable.utilsils";
import { getThemeStyles } from "../../utils";

import PropTypes from "prop-types";

export default function DataTable({
  data: Data,
  columns,
  customWidgets,
  options: {
    sort,
    sortWholeData,
    columnSelect,
    csvDownload,
    printCsv,
    paginationLimit,
  },
  customStyles = {},
  theme,
}) {
  const themeStyles = getThemeStyles(theme, customStyles);

  const icons = [columnSelect, csvDownload, printCsv].filter((icon) => icon);
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

  const [csvDownloadLink, setCsvDownloadLink] = useState(null);
  const [csv, setCsv] = useState(null);

  const [orderDesc, setOrderDesc] = useState(
    tableColumns.map((column) => true)
  );

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  let sortBy = (key) => {
    if (sort) {
      let index = tableColumns.findIndex((column) => column == key);

      if (orderDesc[index]) {
        setPaginationData([
          ...paginationData.sort((a, b) =>
            isNaN(a[key])
              ? a[key].toLowerCase() < b[key].toLowerCase()
              : parseInt(b[key]) - parseInt(a[key])
          ),
        ]);
      } else {
        setPaginationData([
          ...paginationData.sort((a, b) =>
            isNaN(a[key])
              ? a[key].toLowerCase() > b[key].toLowerCase()
              : parseInt(a[key]) - parseInt(b[key])
          ),
        ]);
      }
      const desc = [...orderDesc];
      desc[index] = !desc[index];
      setOrderDesc(desc);
    }
  };

  useEffect(() => {
    let csv = createCSV(data);
    setCsvDownloadLink(URL.createObjectURL(csv));
  }, []);

  let handleColumnChange = (isPresent, columnToBeOperated) => {
    setTableColumns(
      isPresent
        ? [...tableColumns.filter((column) => column != columnToBeOperated)]
        : [
            ...tableColumns.slice(
              0,
              filterColumns.findIndex((column) => column == columnToBeOperated)
            ),
            columnToBeOperated,
            ...tableColumns.slice(
              filterColumns.findIndex((column) => column == columnToBeOperated),
              tableColumns.length
            ),
          ]
    );
  };

  let searchBy = (e) => {
    const substring = e.target.value.toLowerCase();
    if (substring) {
      setData([
        ...data.filter((row) => {
          if (
            filterColumns.find(
              (column) =>
                typeof row[column] == "string" &&
                row[column].toLowerCase().includes(substring)
            )
          ) {
            return true;
          } else {
            return false;
          }
        }),
      ]);
    } else {
      setData([
        ...Data.map((obj) => {
          {
            let tempObj = {};
            filterColumns.forEach((column) => {
              tempObj[column] = obj[column];
            });
            return tempObj;
          }
        }),
      ]);
    }
  };

  let handlePrint = (e) => {
    var w = window.open();

    var html = "<!DOCTYPE HTML>";
    html += '<html lang="en-us">';
    html += "<head><style></style></head>";
    html += "<body>";
    html += tableRef.current.innerHTML;
    html += "</body></html>";

    w.document.write(html);
    w.window.print();
  };

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
    <div>
      {icons.length != 0 && (
        <div className={styles.filterWrapper}>
          <div
            className={styles.searchWrapper}
            style={{
              backgroundColor: themeStyles.searchBackground,
            }}
          >
            <SearchIcon
              className={styles.searchIcon}
              style={{ color: themeStyles.searchColor }}
            />{" "}
            <input
              className={styles.search}
              onChange={searchBy}
              style={{
                color: themeStyles.searchColor,
                border: `2px solid ${themeStyles.searchBorder}`,
              }}
            />
          </div>
          <div
            className={styles.icons}
            style={{
              gridTemplateColumns: `repeat(${icons.length},1fr)`,
              backgroundColor: themeStyles.iconsBackground,
            }}
          >
            {printCsv && (
              <IconButton
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={handlePrint}
              >
                <PrintIcon style={{ color: themeStyles.iconsColor }} />
              </IconButton>
            )}
            {columnSelect && (
              <IconButton
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                <ViewColumnIcon style={{ color: themeStyles.iconsColor }} />
              </IconButton>
            )}
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <div className={styles.popoverContent}>
                {filterColumns.map((column) => (
                  <div>
                    <Checkbox
                      checked={tableColumns.includes(column)}
                      onChange={(e) =>
                        handleColumnChange(
                          tableColumns.includes(column),
                          column
                        )
                      }
                      inputProps={{
                        "aria-label": "primary checkbox",
                      }}
                    />
                    {column}
                  </div>
                ))}
              </div>
            </Popover>
            {csvDownload && (
              <a href={csvDownloadLink} download="table.csv">
                <IconButton>
                  <GetAppIcon
                    style={{
                      color: themeStyles.iconsColor,
                    }}
                  />
                </IconButton>
              </a>
            )}
          </div>
        </div>
      )}
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
              <th onClick={(e) => sortBy(heading)} draggable="true">
                <div>
                  <p>{heading}</p>{" "}
                  {sort && (
                    <ArrowUpwardIcon
                      style={{
                        color: themeStyles.headerColor,
                      }}
                      className={`${styles.upicon} ${
                        orderDesc[index] ? styles.invert : styles.normal
                      }`}
                    />
                  )}
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

      <div className={styles.paginationWrapper}>
        <div
          className={styles.pagination}
          style={{
            gridTemplateColumns: `repeat(${getNumberOfPages()},1fr)`,
          }}
        >
          {[...Array(getNumberOfPages())].map((num, index) => (
            <div
              onClick={(e) => displayPaginationData(index + 1)}
              style={{
                backgroundColor:
                  currentPage == index + 1
                    ? themeStyles.paginationSelectBackground
                    : "white",
                color:
                  currentPage == index + 1
                    ? themeStyles.paginationSelectColor
                    : "gray",
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.string),
  customWidgets: PropTypes.object,
  options: PropTypes.object,
  customStyles: PropTypes.object,
  theme: PropTypes.oneOf(["tree", "aquamarine", "navy"]),
};

DataTable.defaultProps = {};
