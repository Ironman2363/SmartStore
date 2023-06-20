import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";
import Home from "./screen/Home";
import * as SplashScreen from "expo-splash-screen";
import Icon from "react-native-vector-icons/Feather";
import Cart from "./screen/Cart";
import Status from "./screen/Status";
import Profile from "./screen/Profile";
async function loadFonts() {
  await Font.loadAsync({
    Boldfont: require("./assets/fonts/Poppins-Bold.ttf"),
    Regularfont: require("./assets/fonts/Poppins-Regular.ttf"),
    SemiBoldfont: require("./assets/fonts/Poppins-SemiBold.ttf"),
    // Thêm các font chữ khác nếu cần
  });
}
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MainTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#1C86EE",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarLabel: "Trang chủ",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={size} color={color} />
          ),
          tabBarLabel: "Giỏ hàng",
        }}
      />
      <Tab.Screen
        name="status"
        component={Status}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="clipboard" size={size} color={color} />
          ),
          tabBarLabel: "Đơn hàng",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          tabBarLabel: "Tôi",
        }}
      />
    </Tab.Navigator>
  );
}
function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
      .then(() => loadFonts())
      .then(() => {
        setIsFontLoaded(true);
        SplashScreen.hideAsync();
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!isFontLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen
          name="Main"
          component={MainTabScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
