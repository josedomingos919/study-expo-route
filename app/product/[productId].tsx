import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductPage() {
  const { productId } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Product ID: {productId} </Text>
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
