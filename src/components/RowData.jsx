import React, { useState } from "react";
import styles from "./RowData.module.css";

function RowData({ user }) {
  return (
    <div className={styles.rowWrapper}>
      <p>
        {user.username} ({user.age} years)
      </p>
    </div>
  );
}

export default RowData;
