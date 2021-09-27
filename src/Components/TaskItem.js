import classes from "./TaskItem.module.css";
import { RiDeleteBinFill } from "react-icons/ri";
import React from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../store/task-actions";
const TaskItem = (props) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(taskActions.removeTask(props.id));
  };
  return (
    <div>
      <li className={classes.li}>
        {props.children}
        <button className={classes.button} onClick={deleteItem}>
          <RiDeleteBinFill />
        </button>
      </li>
    </div>
  );
};
export default TaskItem;
