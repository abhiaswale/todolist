import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    tasksArray: [],
    taskCount: 0,
  },
  reducers: {
    addTask(state, action) {
      const task = action.payload;
      state.tasksArray.unshift({
        text: task,
        id: Math.random().toString(),
      });
      state.taskCount++;
    },
    removeTask(state, action) {
      const id = action.payload;
      state.tasksArray = state.tasksArray.filter((task) => task.id !== id);
      state.taskCount--;
    },
  },
});

export const taskActions = taskSlice.actions;
export default taskSlice;
