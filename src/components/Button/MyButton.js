import { Text, TouchableOpacity, StyleSheet } from "react-native";

const MyButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.4}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#036a86ff",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 10,
    margin: 5,
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
