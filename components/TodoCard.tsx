import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface TodoCardProps {
  id?: number;
  title: string;
  completed?: boolean;
}

export default function TodoCard({ id, title, completed }: TodoCardProps) {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.navigate(`/list/detail/${id}`)}>
      <View style={[styles.card, completed ? styles.cardDone : undefined]}>
        <Text
          style={[
            styles.paragraph,
            completed ? styles.paragraphDone : undefined,
          ]}
        >
          {title}
        </Text>
        <Text>{completed ? "Fait" : "A faire"}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    gap: 32,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 24,
    gap: 16,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDone: {
    opacity: 0.6,
  },
  paragraphDone: {
    textDecorationLine: "line-through",
    fontStyle: "italic",
  },
});
