import { TodoProvider } from "@/data/context/TodoContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <TodoProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </TodoProvider>
  );
}
