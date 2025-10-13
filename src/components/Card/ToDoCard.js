import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

const ToDoCard = ({ item, onPress, onComplete, onDelete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </TouchableOpacity>
      <View style={styles.btnsContainer}>
        <TouchableOpacity onPress={onComplete}>
          <Feather
            name="check-square"
            size={20}
            color={item.complete ? "green" : "black"}
            style={{ paddingHorizontal: 4 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Feather name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnsContainer: {
    flexDirection: "row",
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
