import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // ajuste conforme necessário
      >
        <Home />
      </KeyboardAvoidingView>
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    flex: 1,
    justifyContent: "flex-end", // ou 'center' dependendo do layout
    padding: 24,
  },
  input: {
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
