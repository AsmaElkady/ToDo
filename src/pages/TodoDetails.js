import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const TodoDetails = () => {
  const { params } = useRoute();
  if (!params?.item) return <Text>There is no item to show</Text>;
  const todo = params.item;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.desc}>{todo.desc}</Text>
    </View>
  );
};

export default TodoDetails;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#036a86ff",
    margin: 15,
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
