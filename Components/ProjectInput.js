import { TextInput, StyleSheet } from "react-native";

function ProjectInput({ projectText, setProjectText }) {
  const handelTextInput = (enteredText) => {
    setProjectText(enteredText);
  };

  return (
    <TextInput
      style={styles.textInput}
      placeholder="Your Project Name!"
      value={projectText}
      onChangeText={handelTextInput}
    />
  );
}

export default ProjectInput;

const styles = StyleSheet.create({
  textInput: {
    width: "70%",
    borderWidth: 1,
    padding: 7,
    borderColor: "gray",

    borderRadius: 5,
  },
});
