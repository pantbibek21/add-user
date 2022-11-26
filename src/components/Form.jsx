import React, { useState } from "react";
import styles from "./Form.module.css";
import ModelError from "./ModelError";

function Form({ getUserData, getError }) {
  let [username, setUsername] = useState("");
  let [error, setError] = useState();
  let [age, setAge] = useState("");

  function resetInput() {
    setAge("");
    setUsername("");
  }

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const onAgeChange = (event) => {
    setAge(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();
    if (username.trim() == "" || age.trim() == "") {
      setError({ title: "Empty Field", body: "Input field cannot be empty !" });
      resetInput();
      return;
    }
    if (+age < 0) {
      setError({ title: "Incorrect Age", body: "Age cannot be in negative !" });
      resetInput();
      return;
    }

    if (+age < 18) {
      setError({
        title: "Cannot be our user",
        body: "User age must be greater than 18 !",
      });
      resetInput();
      return;
    }
    getUserData({ username: username, age: age });
    resetInput();
  }

  return (
    <div>
      {error && <ModelError errorData={error} setError={setError} />}

      <form className={styles.formWrapper} onSubmit={submitHandler}>
        <div className={styles.formControl}>
          <label>Username</label>
          <input
            type="text"
            onChange={onUsernameChange}
            className={styles.formInput}
            value={username}
          ></input>
        </div>
        <div className={styles.formControl}>
          <label>Age (Year)</label>
          <input
            type="number"
            onChange={onAgeChange}
            className={styles.formInput}
            value={age}
          ></input>
        </div>
        <button type="submit" className={styles.btn}>
          Add User
        </button>
      </form>
    </div>
  );
}

export default Form;
