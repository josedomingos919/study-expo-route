import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
        }}
      />
      <Stack.Screen name="user" />
      <Stack.Screen
        name="product/[productId]"
        options={{ headerTitle: "Product" }}
      />
    </Stack>
  );
}
