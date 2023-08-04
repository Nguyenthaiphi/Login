import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Begin from "../screen/GioiThieu";
import Login from "../screen/Login";
import Register from "../screen/DangKy";
import Home from "../screen/Home";
import Lockacc from "../screen/Lockacc";

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Begin" component={Begin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DangKy" component={Register} />
        <Stack.Screen name="BottomTab" component={Home} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lockacc" component={Lockacc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
