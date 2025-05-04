import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Link href="/user">Go to UserPage</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
