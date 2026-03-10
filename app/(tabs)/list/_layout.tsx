import { Stack } from "expo-router";

export default function ListLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerBackTitle: "Retour",
      }}
    />
  );
}
