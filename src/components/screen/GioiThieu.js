import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

const GioiThieu = () => {
  const navigate = useNavigation();

  const navigateToLogin = () => {
    navigate.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground
        style={styles.background}
        source={{
          uri: "https://pfphunt.com/wp-content/uploads/Messi-and-Ronaldo-Pfp-For-Discord.jpg",
        }}
        blurRadius={0}
      >
        <View style={styles.texthello}>
          <Text style={styles.Texts}></Text>
          
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.Text1}> Hệ Thống Đặt Lịch Sân Bóng  </Text>
          <Text style={styles.Text1}> Trực Tuyến </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={navigateToLogin}
        >
          <Text style={styles.Text}>Đăng Nhập </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default GioiThieu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#006666",
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 30,
  },
  Text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  Texts: {
    fontSize: 80,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  Text1: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  textContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  texthello: {
    marginVertical: 170,
    alignItems: "center",
  },
});
