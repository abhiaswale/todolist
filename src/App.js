import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import UserInputForm from "./Components/UserInputForm";

function App() {
  const [error, setIsError] = useState(null);
  const tasklist = useSelector((state) => state.tasks.tasksArray);
  useEffect(() => {
    const sendTaskList = async () => {
      const response = await fetch(
        "https://temp-69d3b-default-rtdb.firebaseio.com/tasks.json",
        {
          method: "PUT",
          body: JSON.stringify(tasklist),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    };

    try {
      sendTaskList();
    } catch (e) {
      setIsError(e);
    }
  }, [tasklist]);

  return (
    <div>
      <Counter />
      <Header />
      <UserInputForm />
      {!error && <TaskList />}
    </div>
  );
}

export default App;
