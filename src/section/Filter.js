import { View, StyleSheet } from "react-native";
import OutlineButton from "../components/Button/OutlineButton";
import { useCallback } from "react";

const Filter = ({ active, setActive, onPress }) => {
  return (
    <View style={styles.filterContainer}>
      <OutlineButton
        title="All"
        active={active == "all"}
        onPress={() => setActive("all")}
      />
      <OutlineButton
        title="Completed"
        active={active == "completed"}
        onPress={() => setActive("completed")}
      />
      <OutlineButton
        title="Uncompleted"
        active={active == "uncompleted"}
        onPress={() => setActive("uncompleted")}
      />
    </View>
  );
};

export default Filter;
const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "88%",
  },
});
