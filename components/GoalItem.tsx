import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface GoalItemProps {
  text: string;
  id: string;
  removeItemHandler: (id: string) => void;
}

const GoalItem: React.FC<GoalItemProps> = ({ text, id, removeItemHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => removeItemHandler(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
