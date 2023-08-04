import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { apiApp, apiKey } from "../../features/ApiKey";
import { getData } from "../../features/MyA";

const Lockacc = () => {
  const navigate = useNavigation();

  const updatedUserData = {
    status: "binhthuong",
  };

  const handleRestoreAccount = () => {
    getData("idUser").then((objectId) => {
      if (!objectId) {
        Alert.alert("Lỗi", "Không tìm thấy objectId. Vui lòng đăng nhập lại.");
        return;
      }

      fetch(
        `https://api.backendless.com/${apiApp}/${apiKey}/data/Users/${objectId}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUserData),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("");
          navigate.navigate("Home");
        })
        .catch((error) => {
          console.error("Lỗi:", error);
          Alert.alert("");
        });
    });
  };

  const handleExit = () => {
    navigate.navigate("Begin");
  };

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  restoreButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  restoreButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  exitButton: {
    backgroundColor: "#f44336",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  exitButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Lockacc;
