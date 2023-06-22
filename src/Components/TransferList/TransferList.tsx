import React, { useState, useEffect, cloneElement } from "react";
import styles from "./TransferList.module.css";

import classNames from "classnames";

import PropTypes from "prop-types";

export default function TransferList({
  headers,
  transferListData,
  customCard,
}) {
  const NUM_COLS = 3;

  let conversion = (array) => {
    let NUM_ROWS = Math.max(...array.map((arr) => arr.length));
    let NUM_COLS = array.length;
    let newArr = [];
    let i = 0;
    while (i < NUM_ROWS) {
      let dummyArr = [];
      array.forEach((arr) => {
        dummyArr.push(arr[i]);
      });
      newArr.push(dummyArr);
      i += 1;
    }
    return newArr;
  };

  const [transferList, setTransferList] = useState(
    conversion(transferListData)
  );

  return (
    <div
      className={styles.transferList}
      style={{ gridTemplateColumns: `repeat(${NUM_COLS},1fr)` }}
    >
      {headers.map((header) => (
        <h2>{header}</h2>
      ))}
      {transferList.map((list, listIndex) =>
        list.map((column, columnIndex) => (
          <div
            className={classNames({
              [styles.transferCard]: column,
              [styles.defaultTransferCardStyle]: column && !customCard,
            })}
            onClick={(e) => {
              let transferListArray = [...transferList];
              let newColumnIndex = columnIndex + 1;
              let newRowIndex;
              if (newColumnIndex <= NUM_COLS - 1) {
                let value = column;
                let i = 0;
                while (i < transferList.length) {
                  if (!transferList[i][newColumnIndex]) {
                    newRowIndex = i;
                    break;
                  }
                  i += 1;
                }

                if (typeof newRowIndex == "undefined") {
                  newRowIndex = transferListArray.length;
                  transferListArray.push(Array(NUM_COLS).fill(undefined));
                }
                transferListArray[newRowIndex][newColumnIndex] = value;
                transferListArray[listIndex][columnIndex] = undefined;
                i = listIndex;
                while (i <= transferList.length - 2) {
                  transferListArray[i][columnIndex] =
                    transferListArray[i + 1][columnIndex];
                  i += 1;
                }
                transferListArray[i][columnIndex] = undefined;
                setTransferList(transferListArray);
              }
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              let transferListArray = [...transferList];
              let newColumnIndex = columnIndex - 1;
              let newRowIndex;
              if (newColumnIndex >= 0) {
                let value = column;
                let i = 0;
                while (i < transferList.length) {
                  if (!transferList[i][newColumnIndex]) {
                    newRowIndex = i;
                    break;
                  }
                  i += 1;
                }

                if (typeof newRowIndex == "undefined") {
                  newRowIndex = transferListArray.length;
                  transferListArray.push(Array(NUM_COLS).fill(undefined));
                }
                transferListArray[newRowIndex][newColumnIndex] = value;
                transferListArray[listIndex][columnIndex] = undefined;

                i = listIndex;
                while (i <= transferList.length - 2) {
                  transferListArray[i][columnIndex] =
                    transferListArray[i + 1][columnIndex];
                  i += 1;
                }
                transferListArray[i][columnIndex] = undefined;
                setTransferList(transferListArray);
              }
            }}
          >
            {customCard && column
              ? cloneElement(customCard, { children: column })
              : column}
          </div>
        ))
      )}
    </div>
  );
}

TransferList.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  transferListData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  customCard: PropTypes.node,
};

TransferList.defaultProps = {};
