import React from "react";
import { TextInput } from "react-native";

import { styles } from "./styles";

interface BatTextInputProps {
  pass: string;
}

export function BatTextInput({ pass }: BatTextInputProps) {
  return (
    <>
      <TextInput style={styles.input} placeholder="pass" value={pass} />
    </>
  );
}
