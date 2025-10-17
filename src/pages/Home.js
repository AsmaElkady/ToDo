import { View, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../router/Router";
import TodoForm from "../section/TodoForm";
import Filter from "../section/Filter";
import ToDoCard from "../components/Card/ToDoCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { saveAllTodos, deleteTodo, toggleTodo } from "../redux/slice/todoSlice";
import { filterTodos } from "../utils/Todo";

const Home = () => {
  const listTodo = useSelector((state) => state.todos.todos);
  const [active, setActive] = useState("all");
  const [todos, setTodos] = useState(listTodo);
  const [filterData, setFilterData] = useState(listTodo);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    setTodos(listTodo);
    handleFilterTodos(active);
  }, [listTodo]);

  useEffect(() => {
    //getTodosStorage();
  }, []);

  const getTodosStorage = async () => {
    const allTodos = JSON.parse(await AsyncStorage.getItem("todos")) || [];
    setTodos(allTodos);
    dispatch(saveAllTodos(allTodos));
  };

  const handleFilterTodos = (type) => {
    filterTodos(type, listTodo, (filtered) => setFilterData(filtered));
  };

  const handelDeleteTodo = async (item) => {
    const newList = todos.filter((todo) => todo.id != item.id);
    setTodos(newList);
    await AsyncStorage.setItem("todos", JSON.stringify(newList));
  };

  const completeTodo = async (item) => {
    const currTodo = todos.find((todo) => todo.id == item.id);
    if (currTodo) {
      currTodo.complete = !currTodo.complete;
      setTodos([...todos]);
      await AsyncStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  return (
    <View style={styles.container}>
      <TodoForm refresh={() => handleFilterTodos(active)} todos={listTodo} />
      <View style={styles.dividerLine} />
      <Filter
        active={active}
        setActive={(data) => {
          setActive(data);
          handleFilterTodos(data);
        }}
      />
      <FlatList
        style={styles.list}
        data={active == "all" ? listTodo : filterData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ToDoCard
            item={item}
            onPress={() => navigate(ROUTES.TODO_DETAILS, { item })}
            onDelete={() => {
              dispatch(deleteTodo(item.id), handelDeleteTodo(item));
            }}
            onComplete={() => {
              dispatch(toggleTodo(item.id), completeTodo(item));
            }}
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
  dividerLine: {
    borderWidth: 0.5,
    borderColor: "#cbcbcbff",
    width: "50%",
    marginBlock: 15,
  },
  list: {
    width: "90%",
    marginTop: 10,
    padding: 2,
  },
});
