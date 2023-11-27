import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

//components
import ProjectList from "./Components/ProjectList";
import ProjectInput from "./Components/ProjectInput";

export default function App() {
  const [projectText, setProjectText] = useState("");
  const [projectList, setProjectList] = useState([]);

  const handelBtnPress = () => {
    setProjectList((privesVal) => [
      ...privesVal,
      { text: projectText, id: Math.random().toString() },
    ]);
    setProjectText("");
  };

  const handelDeleteProject = (id) => {
    // console.log(id);
    setProjectList((privesVal) => privesVal.filter((val) => val.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <ProjectInput
          projectText={projectText}
          setProjectText={setProjectText}
        />
        <Button onPress={handelBtnPress} title="Add Project" />
      </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingBottom: 10,
    marginBottom: 20,
  },
  appBtn: {},

  listBox: {
    flex: 9,
    width: "100%",
    flexDirection: "column",
  },
});
