import { View, StyleSheet, Text, FlatList } from "react-native";
import Input from "../components/Input/Input";
import { useState, useEffect } from "react";
import MyButton from "../components/Button/MyButton";
import ToDoCard from "../components/Card/ToDoCard";
import OutlineButton from "../components/Button/OutlineButton";

const ToDo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [active, setActive] = useState("all");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos([
      {
        id: 1,
        title: "Study js",
        desc: "Learn more about js",
        complete: true,
      },
      {
        id: 2,
        title: "Study React js",
        desc: "Learn more about React js",
        complete: true,
      },
      {
        id: 3,
        title: "Study React Native",
        desc: "Learn more about React Native",
        complete: false,
      },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.MainText}>ToDo App</Text>
      <Input placeholder={"Add todo title"} />
      <Input placeholder={"Add todo description"} />
      <MyButton title="Submit" />
      <View style={styles.dividerLine} />
      <View style={styles.filterContainer}>
        <OutlineButton title="All" active={active == "all"} />
        <OutlineButton title="Completed" />
        <OutlineButton title="Uncompleted" />
      </View>
      <FlatList
        style={styles.list}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ToDoCard title={item.title} desc={item.desc} />
        )}
      />
    </View>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 20,
  },
  MainText: {
    fontWeight: "bold",
    color: "#036a86ff",
    fontSize: 20,
    marginBottom: 10,
  },
  dividerLine: {
    borderWidth: 0.5,
    borderColor: "#cbcbcbff",
    width: "50%",
    marginBlock: 15,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "88%",
  },
  list: {
    width: "90%",
    marginTop: 10,
    padding: 2,
  },
});
