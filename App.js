import React,{useState,useEffect} from  "react";
import MainPage from "./pages/MainPage";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import LoadingPage from "./pages/LoadingPage";
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginPage from "./pages/LoginPage";
import { Fontisto } from "@expo/vector-icons";
import {useFonts} from "expo-font";
import { StyleSheet,TextInput, Image,View, Text, Alert,ScrollView,TouchableOpacity,ImageBackground ,PhoneNumberInput} from 'react-native';
const Drawer = createDrawerNavigator();


export default function App() {

    const [loading,setLoading] =useState(true)

    const [loaded] = useFonts({
      //Eng
      
      
      

      //Kor
      Nanum_Coding:require("./assets/font/NanumGothicCoding-Regular.ttf"),
      Dongle_Regular:require("./assets/font/Dongle-Regular.ttf"),
      NanumPen_Regular:require("./assets/font/NanumPenScript-Regular.ttf"),
  })
    
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
        <Drawer.Screen name="MainPage" component={StackNavigator} options={({navigation})=>({
                headerStyle: {
                    backgroundColor: "white",
                    borderBottomColor: "white",
                    shadowColor: "white",
                },
                headerTitleAlign:"Left",
                headerTintColor: "#000",
                headerBackTitleVisible: false,
                
                headerTitle:()=>{ 
                    return (
                    <View>
                        <View>
                            <TouchableOpacity>
                                <Text style={styles.MainTitle}>TATOO NINE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    )
                },
                headerRight:()=>{
                    return(
                <View style={{flexDirection:"row", marginHorizontal:10}}>
                  <TouchableOpacity onPress={()=>{navigation.navigate("SearchPage")}}>
                      <Fontisto style={styles.fontImg} name='search'/>
                  </TouchableOpacity>
                </View>
                  )    
                },
            })}  
        />
        <Drawer.Screen name="LoginPage" component={LoginPage} />
      </Drawer.Navigator>
    </NavigationContainer>
    )
  }
}
const styles = StyleSheet.create({
  MainTitle:{
    fontSize:25,
    fontWeight:"500",
    fontFamily:"Nanum_Coding",
    textAlign:"center",
    paddingLeft:50,
},
  fontImg:{
    fontSize:30,
    marginRight:5,
  },
});
