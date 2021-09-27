import { useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const numberOfTasks = useSelector((state) => state.tasks.taskCount);

  return <div className={classes.count}>Tasks Remaining : {numberOfTasks}</div>;
};
export default Counter;
