import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Feather } from "@expo/vector-icons";

const RightActions = ({ progress, dragX, onPress }) => {
  const trans = dragX.interpolate({
    inputRange: [0, 50, 100, 101],
    outputRange: [-20, 0, 0, 1],
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <Feather style={styles.icon} name="trash" size={25} color="black" />
    </TouchableOpacity>
  );
};

const TodoItem = ({ onRightPress, item }) => (
  <Swipeable
    renderRightActions={(progress, dragX) => (
      <RightActions progress={progress} dragX={dragX} onPress={onRightPress} />
    )}
  >
    <Text style={styles.item}>{item.text}</Text>
  </Swipeable>
);
export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  },

  icon: {
    padding: 16,
    marginTop: 10,
    justifyContent: "center",
  },
});
