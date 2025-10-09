import { View } from "react-native";
import ToDo from "./src/pages/ToDo";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <ToDo />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
