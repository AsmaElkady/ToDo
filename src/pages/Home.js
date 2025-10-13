import { View, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../router/Router";
import TodoForm from "../section/TodoForm";
import Filter from "../section/Filter";
import ToDoCard from "../components/Card/ToDoCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [active, setActive] = useState("all");
  const [todos, setTodos] = useState([]);
  const [filterData, setFilterData] = useState(todos);
  const { navigate } = useNavigation();

  useEffect(() => {
    getTodosStorage();
  }, []);

  const getTodosStorage = async () => {
    const allTodos = JSON.parse(await AsyncStorage.getItem("todos")) || [];
    setTodos(allTodos);
  };

  const filterTodos = (data) => {
    if (data == "all") return todos;
    const check = data == "completed" ? true : false;
    setFilterData(todos.filter((todo) => todo.complete == check));
  };

  const deleteTodo = async (item) => {
    const newList = todos.filter((todo) => todo.id != item.id);
    setTodos(newList);
    await AsyncStorage.setItem("todos", JSON.stringify(newList));
  };
  const completeTodo = async (item) => {
    const currTodo = todos.find((todo) => todo.id == item.id);
    currTodo.complete = true;
    setTodos([...todos]);
    await AsyncStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <View style={styles.container}>
      <TodoForm setTodos={setTodos} todos={todos} />
      <View style={styles.dividerLine} />
      <Filter
        active={active}
        setActive={(data) => {
          setActive(data);
          filterTodos(data);
        }}
      />
      {/* <TodoList
        todos={active == "all" ? todos : filterData}
        setTodos={setTodos}
        onDelete={(item) =>
          onDelete(todos, item, (newTodo) => setTodos(newTodo))
        }
        onComplete={(item) =>
          onComplete(todos, item, (newTodo) => setTodos(newTodo))
        }
      /> */}
      <FlatList
        style={styles.list}
        data={active == "all" ? todos : filterData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ToDoCard
            item={item}
            onPress={() => navigate(ROUTES.TODO_DETAILS, { item })}
            onDelete={() => deleteTodo(item)}
            onComplete={() => completeTodo(item)}
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
