import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./task-actions";

const store = configureStore({
  reducer: { tasks: taskSlice.reducer },
});

export default store;
