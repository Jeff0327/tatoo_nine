import React,{useState,useEffect} from  "react";
import MainPage from "./pages/MainPage";
import { StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import LoadingPage from "./pages/LoadingPage";
import SearchPage from "./pages/SearchPage";
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
      <StackNavigator/>
    </NavigationContainer>
  )
    }
}
const styles = StyleSheet.create({
  
});
