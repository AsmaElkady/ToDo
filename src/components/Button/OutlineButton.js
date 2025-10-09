import { Text, TouchableOpacity, StyleSheet } from "react-native";

const OutlineButton = ({ title, active, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, active && styles.activeConatiner]}
      onPress={onPress}
      activeOpacity={0.4}
    >
      <Text style={[styles.text, active && styles.activeText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  container: {
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 25,
    borderColor: "#036a86ff",
    borderWidth: 1,
    margin: 3,
  },
  text: {
    color: "#036a86ff",
    fontSize: 16,
  },
  activeConatiner: {
    backgroundColor: "#036a86ff",
  },
  activeText: {
    color: "white",
  },
});
