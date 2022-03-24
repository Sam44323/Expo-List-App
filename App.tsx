import { useState } from "react";
import { StyleSheet, Button, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [goalList, setGoalList] = useState<{ text: string; id: string }[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const removeItem = (id: String) => {
    setGoalList([...goalList.filter((item) => item.id !== id)]);
  };

  return (
    <>
      <StatusBar style="inverted" />
      <View style={styles.appContainer}>
        <Button
          title="Add Goal"
          color="#a065ec"
          onPress={() => setShowModal(true)}
        />
        <GoalInput
          showModal={showModal}
          goalValue={goalInput}
          changeHandler={setGoalInput}
          cancelGoal={() => setShowModal(false)}
          addGoalHandler={() => {
            setGoalList([
              ...goalList,
              { text: goalInput, id: Math.random().toString() },
            ]);
            setGoalInput("");
            setShowModal(false);
          }}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={goalList}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                removeItemHandler={removeItem}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 48,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 18,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
