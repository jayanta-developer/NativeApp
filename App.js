import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList, Modal } from "react-native";

//components
import ProjectList from "./Components/ProjectList";
import ProjectInput from "./Components/ProjectInput";

export default function App() {
  const [projectText, setProjectText] = useState("");
  const [projectList, setProjectList] = useState([]);
  const [inputBox, setInputBox] = useState(false);

  const handelBtnPress = () => {
    setProjectList((privesVal) => [
      ...privesVal,
      { text: projectText, id: Math.random().toString() },
    ]);
    setProjectText("");
  };

  const handelDeleteProject = (id) => {
    setProjectList((privesVal) => privesVal.filter((val) => val.id !== id));
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add New Project"
        color="blue"
        onPress={() => setInputBox(true)}
      />
      <Modal visible={inputBox}>
        <View style={styles.inputBox}>
          <ProjectInput
            projectText={projectText}
            setProjectText={setProjectText}
          />
          <View style={styles.appBtnBox}>
            <Button onPress={handelBtnPress} title="Add Project" />
            <Button title="Cancel" />
          </View>
        </View>
      </Modal>
      <View style={styles.listBox}>
        <FlatList
          data={projectList}
          renderItem={({ item }) => {
            return (
              <ProjectList
                itemText={item}
                handelDeleteProject={handelDeleteProject}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  inputBox: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingBottom: 10,
    marginBottom: 20,
  },
  appBtnBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  listBox: {
    flex: 9,
    width: "100%",
    flexDirection: "column",
  },
});
