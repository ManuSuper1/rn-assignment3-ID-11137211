import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => (
  <View style={styles.header}>
    <View>
      <Text style={styles.title}>Hello, Manu</Text>
      <Text style={styles.subtitle}>9 tasks today</Text>
    </View>
    <Image
      style={styles.profileImage}
      source={require("../assets/profile.png")}
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#888888",
  },
  profileImage: {
    width: 46,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#fff",
  },
});

export default Header;
