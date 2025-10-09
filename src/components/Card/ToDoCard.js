import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ToDoCard = ({ title, desc }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#036a86ff",
    marginBlock: 5,
    boxShadow: "2px 2px #036a8648",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#036a86ff",
  },
  desc: {
    fontSize: 16,
  },
});

export default ToDoCard;
