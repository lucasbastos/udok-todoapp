import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import SignUpScreen from "./screens/signup";

const Stack = createStackNavigator();

//Root do Aplicativo, retorna uma stack de telas, ocultando o header
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
