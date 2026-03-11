import { TodoContext } from "@/data/context/TodoContext";
import { Stack, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Text } from "react-native";

export default function TodoDetailScreen() {
  const { id } = useLocalSearchParams();
  const { todos } = useContext(TodoContext);

  const todo = todos.find((t) => t.id === parseInt(id as string));
  return (
    <>
      <Stack.Screen
        options={{
          title: "TODO",
        }}
      />
      <Text>ID : {id}</Text>
      <Text>Titre : {todo?.todo}</Text>
      <Text>{todo?.completed ? "Fait" : "A faire"}</Text>
    </>
  );
}
