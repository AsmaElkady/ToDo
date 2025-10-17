import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./slice/todoSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persisitConfig = {
  key: "root",
  storage: AsyncStorage,
};

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export default store;
