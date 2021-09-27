import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";
import { useSelector } from "react-redux";

const TaskList = (props) => {
  const taskItems = useSelector((state) => state.tasks.tasksArray);

  // console.log(taskItems);
  return (
    <ul className={classes.ul}>
      {taskItems.map((task) => (
        <TaskItem key={task.id} id={task.id} onDelete={props.onDeleteTask}>
          {task.text}
        </TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;
