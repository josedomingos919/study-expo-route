import { Link, router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomePage() {
  const goToProduct = () => {
    router.push("/product/12356");
  };

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Link href="/user">Go to UserPage</Link>
      <Button title="Go to random product" onPress={goToProduct} />
      <Link href="/product/45">Go to product 45</Link>
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
