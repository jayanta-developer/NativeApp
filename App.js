import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [projectText, setProjectText] = useState("");
  const [projectList, setProjectList] = useState([]);

  const handelTextInput = (enteredText) => {
    setProjectText(enteredText);
  };

  const handelBtnPress = () => {
    setProjectList((privesVal) => [...privesVal, projectText]);
    setProjectText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Project Name!"
          value={projectText}
          onChangeText={handelTextInput}
        />
        <Button onPress={handelBtnPress} title="Add Project" />
      </View>
      <View style={styles.listBox}>
        {projectList &&
          projectList.map((e, index) => (
            <Text key={index}>
              {index + 1}: {e}
            </Text>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    flexDirection: "column",
    alignItems: "center",
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "gray",
    marginBottom: 15,
  },
  appBtn: {},
  textInput: {
    width: "90%",
    borderWidth: 1,
    padding: 7,
    borderColor: "gray",
    marginRight: 8,
    borderRadius: 5,
  },
  listBox: {
    flex: 7,
    flexDirection: "column",
  },
});
