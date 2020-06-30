import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 100, height: 45 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 30,
    backgroundColor: "#3FD8B4",
    justifyContent: "center",
    alignItems: "center",
  },
});
