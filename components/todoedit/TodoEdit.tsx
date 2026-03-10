import { TodoContext } from "@/data/context/TodoContext";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function TodoEdit() {
  const [title, setTitle] = useState("");
  const { addTodo } = useContext(TodoContext);
  const router = useRouter();
  const onSubmit = async () => {
    await addTodo(title);
    router.back();
  };
  return (
    <View style={styles.container}>
      <Text>Titre de la nouvelle TODO :</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
      />
      <Button title="Ajouter" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
  },
  input: {
    borderWidth: 1,
    padding: 16,
  },
});
