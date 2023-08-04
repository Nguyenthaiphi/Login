import {
  ScrollView,
  Alert,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { apiKey, apiApp } from "../../features/ApiKey";

import { useNavigation } from "@react-navigation/core";
import { storeData } from "../../features/MyA";
const { width, height } = Dimensions.get("screen");

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [getpassword, setpasswordvi] = useState(false);

  const navigate = useNavigation();
  const navigateToRegister = () => {

    
    navigate.navigate("DangKy");
  };




  



  
  
  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert("Bạn Chưa điền Thông Tin Đăng Nhập!");
      return;
    } else if (username.includes(" ") || password.includes(" ")) {
      Alert.alert("");
      return;
    }

    fetch(
      `https://api.backendless.com/${apiApp}/${apiKey}/data/Users?where=phonenumber%3D'${username}'`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          fetch(`https://api.backendless.com/${apiApp}/${apiKey}/users/login`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              login: username,
              password: password,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              const user = data;
              if (user.status && user.status === "xoa") {
                console.log("");
                Alert.alert("");
                navigate.navigate("Lockacc");
                return;
              }
              if (data.objectId) {
                console.log("objectId:", data.objectId);
                storeData("idUser", data.objectId);
                navigate.navigate("Home");
              } else {
                console.log("Sai Mật Khẩu");
                Alert.alert( "Sai Mật Khẩu");
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        } else {
          console.log("Tài Khoảng Không Tồn Tại");
          Alert.alert(
            "Lỗi",
            "Tài khoảng không tồn tại. Bạn hãy tạo tài khoảng để đặt Sân "
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };



 

  return (
    

    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={navigate.goBack}>
          <View style={styles.IconLeft}>
            <AntDesign name="left" size={30} color="black" />
          </View>

        </TouchableOpacity>
      </View>

      <View style={styles.headerTitle}>
        
        <Text style={styles.headerText}  >
         Hệ Thống App Đặt Sân Bóng, Xin Chào Quý Khách Hàng!
        </Text>
        
      </View>
      
    
     






      <View style={styles.body}>
        <View style={styles.bodyUser}>
        <Text>TÀI KHOẢN:</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Vui lòng nhập SDT"
            keyboardType="phone-pad"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          
        </View>

      



        






        <View style={styles.bodyPassword}>
        <Text  >MẬT KHẨU:</Text>
          <TextInput
            style={styles.textinput}
            placeholder=" Vui lòng nhập MK"
            autoCapitalize="none"
            secureTextEntry={getpassword ? false : true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={{ left: -5, top: 30 }}
            onPress={() => {
              setpasswordvi(!getpassword);
            }}
          >
            {getpassword ? (
              <Entypo
                name="eye-with-line"
                size={26}
                color="black"
                style={styles.noiconeye}
              />
            ) : (
              <Entypo
                name="eye"
                size={26}
                color="black"
                style={styles.iconeye}
              />
            )}
          </TouchableOpacity>
        </View>
       
        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.bodyButton}>
            <Text style={styles.bodyLogin}> Đăng Nhập</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerText}>
          <View style={styles.footerLine}></View>
          <Text style={styles.footerOr}>Phương Thức Đăng Nhập! </Text>
          <View style={styles.footerLine}></View>
        </View>
        <View style={styles.footerImage}>
          <View style={styles.footerImg}>
            <TouchableOpacity>
              <View style={styles.borderimg}>
                <View style={styles.footerAnh1}>
                  <Image source={require("../../../assets/fb.png")} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.borderimg}>
                <View style={styles.footerAnh1}>
                  <Image source={require("../../../assets/gg.png")} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.borderimg}>
                <View style={styles.footerAnh1}>
                  <Image source={require("../../../assets/github.png")} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.borderimg}>
                <View style={styles.footerAnh1}>
                  <Image source={require("../../../assets/tw.png")} />
                </View>
              </View>
            </TouchableOpacity>

          </View>
          <View style={styles.footerTextBot}>
            <Text style={styles.Textbot}> Bạn Chưa Có Tài Khoản! </Text>
            <TouchableOpacity onPress={navigateToRegister}>
              <Text style={[styles.Textbot, { color: "#0099CC" }]}>
                {" "}
                Đăng ký
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: width,
    height: (height * 15) / 100,
    justifyContent: "center",
  },
  IconLeft: {
    marginLeft: 20,
    borderWidth: 3,
    borderRadius: 40,
    height: 50,
    width: 50,
    borderColor: "#001100",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    width: 400,
    height: (height * 10) / 100,
    marginLeft: 10,
    
    
  },
  headerText: {
    fontSize: 30,
    fontWeight: "700",
  },

  body: {
    width: width,
    height: (height * 30) / 100,
    marginTop: 20,
    alignItems: "center",
  },
  bodyUser: {
    witdh: width,
    height: (height * 12) / 100,
  },
  textinput: {
    borderWidth: 2,
    borderRadius: 20,
    width: (width * 80) / 100,
    height: 60,
    padding: 20,
    backgroundColor: "#F7F8F9",
    borderColor: "#000011",
  },
  bodyForgot: {
    width: (width * 90) / 100,
    height: (height * 5) / 100,
    alignItems: "flex-end",
  },
  bodyTextFor: {
    marginTop: 30,
    fontSize: 50,
    fontWeight: "900",
    color: "#6A707C",
  },
  bodyButton: {
    marginTop: 15,
    backgroundColor: "black",
    width: (width * 50) / 100,
    height: (height * 7) / 100,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyLogin: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },

  footer: {
    marginTop: 30,
    height: (height * 40) / 100,
  },
  footerText: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerLine: {
    borderColor: "#E8ECF4",
    borderWidth: 1,
    width: 100,
  },
  footerOr: {
    fontSize: 15,
    fontWeight: "400",
  },
  footerImg: {
    marginTop: 20,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  footerAnh1: {
    width: (width * 18) / 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  borderimg: {
    borderWidth: 2,
    borderColor: "#0099CC",
    borderRadius: 50,
  },
  footerTextBot: {
    marginTop: 30,
    flexDirection: "row",
    alignSelf: "center",
  },
  Textbot: {
    fontSize: 17,
    fontWeight: "500",
  },
  iconeye: {
    left: 300,
    top: -73,
  },
  noiconeye: {
    left: 300,
    top: -73,
  },
  taikhoan:{
    
  }
});
