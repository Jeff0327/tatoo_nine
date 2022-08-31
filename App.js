import React from  "react";
import MainPage from "./pages/MainPage";
import { StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  
});
