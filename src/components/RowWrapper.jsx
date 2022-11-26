import React, { useState } from "react";
import styles from "./RowWrapper.module.css";
import RowData from "./RowData";
function DisplayWrapper(props) {
  return (
    <div className={styles.rowWrapper}>
      {props.usersList.map((user, index) => (
        <RowData user={user} key={index} />
      ))}
    </div>
  );
}

export default DisplayWrapper;
