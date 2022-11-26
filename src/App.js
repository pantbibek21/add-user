import React, { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import RowWrapper from "./components/RowWrapper";

function App() {
  const [rowData, setRowData] = useState([]);
  const [error, setError] = useState(false);
  const getUserData = (dataObj) => {
    setRowData((prevUserList) => {
      return [dataObj, ...prevUserList];
    });
  };

  return (
    <div className="container">
      <Form getUserData={getUserData} />
      {rowData.length < 1 ? (
        ""
      ) : (
        <RowWrapper usersList={rowData} className="active"></RowWrapper>
      )}
    </div>
  );
}

export default App;
