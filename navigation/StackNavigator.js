import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  RefreshControl,
} from "react-native";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import ImagePage from "../pages/ImagePage";
import DetailPage from "../pages/DetailPage";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainPages"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MainPages" component={MainPage} />
      <Stack.Screen name="ImagePage" component={ImagePage} />
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
