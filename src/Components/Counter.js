import { useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const numberOfTasks = useSelector((state) => state.tasks.taskCount);

  return (
    <div className={classes.count}>
      <div>Tasks Remaining : {numberOfTasks}</div>
    </div>
  );
};
export default Counter;
