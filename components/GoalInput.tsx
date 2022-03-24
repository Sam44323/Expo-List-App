import React from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

interface GoalInputProps {
  changeHandler: (value: string) => void;
  goalValue: string;
  addGoalHandler: () => void;
  cancelGoal: () => void;
  showModal: boolean;
}

const GoalInput: React.FC<GoalInputProps> = ({
  goalValue,
  changeHandler,
  addGoalHandler,
  cancelGoal,
  showModal,
}) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={(value) => changeHandler(value)}
          value={goalValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelGoal} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    color: "#120438",
    borderRadius: 6,
    padding: 16,
  },
  image: {
    width: 100,
    margin: 18,
    height: 100,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
