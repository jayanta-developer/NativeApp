import { StyleSheet, View, Text, Pressable } from "react-native";

function ProjectList({ itemText, handelDeleteProject }) {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#C4C4C4" }}
        onPress={handelDeleteProject.bind(this, itemText.id)}
      >
        <Text style={styles.itemText}>{itemText.text}</Text>
      </Pressable>
    </View>
  );
}

export default ProjectList;

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 7,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  itemText: {
    color: "white",
    padding: 5,
  },
});
