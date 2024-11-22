import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Teks di Tengah Layar</Text>

      {/* Dua kotak dengan FlexBox */}
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3", // Abu-abu terang
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "blue",
    fontWeight: "bold",
    marginBottom: 50, // Jarak dari kotak
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%", // Lebar total area kotak
  },
  box1: {
    backgroundColor: "red", // Warna bebas
    width: 100,
    height: 100,
  },
  box2: {
    backgroundColor: "green", // Warna bebas
    width: 100,
    height: 100,
  },
});
