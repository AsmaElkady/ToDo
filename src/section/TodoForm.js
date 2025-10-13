import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Input from "../components/Input/Input";
import MyButton from "../components/Button/MyButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TodoForm = ({ setTodos, todos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const obj = {
      id: Math.floor(Math.random() * 100000).toString(),
      title: title,
      desc: description,
      complete: false,
    };

    if (!title.trim() || !description.trim()) return;
    setTodos((prev) => [obj, ...prev]);
    await AsyncStorage.setItem("todos", JSON.stringify(todos));
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Input
        placeholder={"Add todo title"}
        onChange={(value) => setTitle(value)}
        value={title}
      />
      <Input
        placeholder={"Add todo description"}
        onChange={(value) => setDescription(value)}
        value={description}
      />
      <MyButton title="Submit" onPress={handleSubmit} />
    </>
  );
};

const styles = StyleSheet.create({});

export default TodoForm;
