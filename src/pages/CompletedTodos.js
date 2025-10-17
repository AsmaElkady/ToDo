import { View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import { filterTodos } from "../utils/Todo";
import { useState, useEffect } from "react";
import ToDoCard from "../components/Card/ToDoCard";

const CompletedTodos = () => {
  const listTodos = useSelector((state) => state.todos.todos);
  const [data, setDate] = useState([]);

  useEffect(() => {
    filterTodos("completed", listTodos, (filtered) => setDate(filtered));
  }, [listTodos]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {data.length == 0 ? (
        <Text style={{ textAlign: "center" }}>There is no data to show</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ToDoCard item={item} showAction={false} />}
        />
      )}
    </View>
  );
};

export default CompletedTodos;
