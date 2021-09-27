import React, { useState } from "react";
import classes from "./UserInputForm.module.css";
import { useDispatch } from "react-redux";
import { taskActions } from "../store/task-actions";
const UserInputForm = (props) => {
  const dispatch = useDispatch();

  const [enteredTask, setEnteredTask] = useState("");
  const [taskIsValid, settaskIsValid] = useState(true);
  const inputHandler = (e) => {
    setEnteredTask(e.target.value);
  };
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (enteredTask.trim() === "") {
      settaskIsValid(false);
      return;
    }
    dispatch(taskActions.addTask(enteredTask));
    setEnteredTask("");
    settaskIsValid(true);
  };
  return (
    <React.Fragment>
      <div className={classes.div}>
        <form className={classes.form} onSubmit={formSubmissionHandler}>
          <input
            type="text"
            id="task"
            onChange={inputHandler}
            value={enteredTask}
            placeholder="Add a task!"
          />
          <button>+</button>
        </form>
      </div>
      {!taskIsValid && <p className={classes.p}>Task cannot be empty!!!</p>}
    </React.Fragment>
  );
};

export default UserInputForm;
