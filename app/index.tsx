import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Task from "./components/task";
export default function Index() {
  return (
   <SafeAreaProvider>


    <View style={
      { 
        backgroundColor: "#d7d7d7", 
        padding: 12,
        flex: 1,
      }
    }>
      <Task label='Apprendre React Native' />
      <Task label='Lire un livre' />
      <Task label='Faire les courses' />
      <Task label='Aller à la gym' />
    </View>
      </SafeAreaProvider>
  );
}
