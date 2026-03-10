import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TaskProps {
  label: string;
}

const Task: React.FC<TaskProps> = ({ label }) => {
  const [done, setDone] = useState(false);

  return (
    <TouchableOpacity onPress={() => setDone((prev) => !prev)}>
      <View style={[styles.container, done ? styles.done : styles.todo]}>
        <Text style={[styles.label, done ? styles.strike : null]}>{label}</Text>
        <Text style={styles.state}>{done ? "Fait" : "A faire"}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBlock: 36,
    gap: 12,
    flexDirection: "column",
    padding: 12,
    marginVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    color: '#222',
    marginRight: 12,
  },
  state: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#222",
  },
  done: {
    opacity: 0.7,
  },
  todo: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
  },
  strike: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default Task;
