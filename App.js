import React,{useState,useEffect} from  "react";
import MainPage from "./pages/MainPage";
import { StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import LoadingPage from "./pages/LoadingPage";
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginPage from "./pages/LoginPage";
const Drawer = createDrawerNavigator();
export default function App() {

    const [loading,setLoading] =useState(true)

    
    
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      },3000)
    },[])

    if(loading){
      return <LoadingPage/>
    }else{

    
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MainPage">
        <Drawer.Screen name="MainPage" component={StackNavigator}/>
        <Drawer.Screen name="LoginPage" component={LoginPage} />
      </Drawer.Navigator>
      
    </NavigationContainer>
  )
    }
}
const styles = StyleSheet.create({
  
});
