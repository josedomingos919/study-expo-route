import { StyleSheet, Text, View } from "react-native";

export default function UserPage() {
  return (
    <View style={styles.container}>
      <Text>User Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightpink",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
