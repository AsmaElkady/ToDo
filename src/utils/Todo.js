import AsyncStorage from "@react-native-async-storage/async-storage";

export const onDelete = async (todos, item, callback) => {
  //const todos = await AsyncStorage.getItem("todos");
  const newList = todos.filter((todo) => todo.id != item.id);
  await AsyncStorage.setItem("todos", JSON.stringify(newList));
  callback(newList);
};

export const onComplete = async (todos, item, callback) => {
  //const todos = await AsyncStorage.getItem("todos");
  const currTodo = todos.find((todo) => todo.id == item.id);
  currTodo.complete = true;
  await AsyncStorage.setItem("todos", JSON.stringify(todos));
  callback(todos);
};

export const getTodos = async () => {
  const list = JSON.parse(await AsyncStorage.getItem("todos")) || [];
  return list;
};

export const saveTodos = async (list) => {
  await AsyncStorage.setItem("todos", JSON.stringify(list));
};

export const filterTodos = (type, data, callback) => {
  if (type == "all") return data;
  const check = type == "completed" ? true : false;
  callback(data.filter((todo) => todo.complete == check));
};
