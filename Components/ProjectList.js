import { StyleSheet, View, Text, Pressable } from "react-native";

function ProjectList({ itemText, handelDeleteProject }) {
  return (
    <Pressable onPress={handelDeleteProject}>
      <View style={styles.listItem}>
        <Text style={styles.itemText}>{itemText.text}</Text>
      </View>
    </Pressable>
  );
}

export default ProjectList;

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 7,
    backgroundColor: "gray",
    padding: 5,
    borderRadius: 5,
  },
  itemText: {
    color: "white",
  },
});
