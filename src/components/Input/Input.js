import { StyleSheet, TextInput } from "react-native";

const Input = ({ placeholder, value, onChange, style }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      style={[style, styles.input]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#cbcbcbff",
    width: "90%",
    height: 50,
    marginVertical: 4,
    padding: 10,
    borderRadius: 10,
  },
});

export default Input;
