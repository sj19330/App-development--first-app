import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="input your goal"
        ></TextInput>
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderbottomcolor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    padding: 5,
    width: "70%",
    marginRight: 8,
    paddingLeft: 8,
  },
});
