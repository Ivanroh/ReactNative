import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true, headerTintColor:"#48b9be", headerStyle:{borderBottomWidth:0}, headerTitle:"" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
