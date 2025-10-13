import { StyleSheet, FlatList } from "react-native";
import ToDoCard from "../components/Card/ToDoCard";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../constants";
import { onComplete, onDelete } from "../utils/Todo";

const TodoList = ({ todos, setTodos, onDelete, onComplete }) => {
  const { navigate } = useNavigation();
  return (
    <FlatList
      style={styles.list}
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ToDoCard
          item={item}
          onPress={() => navigate(ROUTES.TODO_DETAILS, { item })}
          //   onDelete={() => onDelete(item)}
          //   onComplete={() => onComplete(item)}
          //   onDelete={() => onDelete(todos, item, (newTodo) => setTodos(newTodo))}
          //   onComplete={() =>
          //     onComplete(todos, item, (newTodo) => setTodos(newTodo))
          //   }
        />
      )}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  list: {
    width: "90%",
    marginTop: 10,
    padding: 2,
  },
});
