import { TodoContext } from "@/data/context/TodoContext";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import TodoCard from "../TodoCard";

export default function TodoList() {
  const [isLoading, setIsLoading] = useState(false);
  const { todos, getTodos } = useContext(TodoContext);
  useEffect(() => {
    setIsLoading(true);
    getTodos().then(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        todos.map((todo) => (
          <TodoCard
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            key={todo.id}
          />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#ecf0f1",
    padding: 8,
    gap: 32,
  },
});
