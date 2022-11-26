import React from "react";
import styles from "./ModelError.module.css";

function ModelError({ errorData, setError }) {
  function handleCloseBtn() {
    setError();
  }
  return (
    <div className={styles.container} onClick={handleCloseBtn}>
      <div className={styles.wrapper}>
        <h1 className={styles.errorHeading}>{errorData.title}</h1>
        <p className={styles.errorMsg}>{errorData.body}</p>
        <button className={styles.closeBtn} onClick={handleCloseBtn}>
          Close
        </button>
      </div>
    </div>
  );
}
export default ModelError;
