import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Modal,
  ImageBackground,
} from "react-native";

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
    setInputBox(false);
  };

  const handelDeleteProject = (id) => {
    setProjectList((privesVal) => privesVal.filter((val) => val.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        style={styles.backgroundImg}
        source={require("./assets/Images/pexels-cottonbro-studio-4604566.jpg")}
      >
        <View style={styles.container}>
          <View style={styles.addBtnBox}>
            <Button
              title="Add New Project"
              color="#218DEB"
              onPress={() => setInputBox(true)}
            />
          </View>
          <Modal visible={inputBox} animationType="slide">
            <View style={styles.inputBox}>
              <ProjectInput
                projectText={projectText}
                setProjectText={setProjectText}
              />
              <View style={styles.appBtnBox}>
                <Button onPress={() => setInputBox(false)} title="Cancel" />
                <Button onPress={handelBtnPress} title="Add Project" />
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
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  backgroundImg: {
    flex: 1,
  },
  addBtnBox: {
    width: "100%",
    justifyContent: "center",
    // alignItems: "center",
  },
  inputBox: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    marginBottom: 20,
  },
  appBtnBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },

  listBox: {
    flex: 9,
    width: "100%",
    flexDirection: "column",
    marginTop: 20,
  },
});
