import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");
const BottomTab = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    width: width,
    height: 60,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
  },
});
