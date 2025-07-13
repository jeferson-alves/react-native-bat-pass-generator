import { Alert, Pressable, Text } from "react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./styles";
import { BatTextInput } from "../BatTextInput";
import { useState } from "react";
import { generatePass } from "../../services/passwordService";

export function BatComp() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
    Alert.alert("Copiado!");
  }

  return (
    <>
      <BatTextInput pass={pass} />
      <Pressable style={styles.button} onPress={handleGenerateButton}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleCopyButton}>
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}
