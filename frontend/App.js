import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainStack from "./routes/MainStack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import DoctorForm from "./screens/DoctorForm";

export default function App() {
  return (
    <SafeAreaProvider>
      <MainStack />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center"
  // }
});
