import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { BatLogo } from "../../components/BatLogo";
import { BatComp } from "../../components/BatButton";

export default function Home() {
  return (
    <>
      {/* <View style={styles.appContainer}> */}
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <View style={styles.inputContainer}>
        <BatComp />
      </View>

      <StatusBar style="light" />
      {/* </View> */}
    </>
  );
}
