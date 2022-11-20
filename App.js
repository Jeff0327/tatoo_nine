import React,{useState,useEffect} from  "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import LoadingPage from "./pages/LoadingPage";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Notice from "./pages/Notice";
import LikePage from "./pages/LikePage";
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Fontisto } from "@expo/vector-icons";
import {useFonts} from "expo-font";
import { StyleSheet,TextInput, Image,View, Text, Alert,ScrollView,TouchableOpacity,ImageBackground ,PhoneNumberInput} from 'react-native';
const Drawer = createDrawerNavigator();


export default function App() {

    const [loading,setLoading] =useState(true)
  
    const [loaded] = useFonts({
      //Eng
      
      Lobster:require("./assets/font/Lobster-Regular.ttf"),
      

      //Kor
      Nanum_Coding:require("./assets/font/NanumGothicCoding-Regular.ttf"),
      Dongle_Regular:require("./assets/font/Dongle-Regular.ttf"),
      NanumPen_Regular:require("./assets/font/NanumPenScript-Regular.ttf"),
      Gowun_Batang:require("./assets/font/GowunBatang-Regular.ttf"),
      Gowun_Batang_Bold:require("./assets/font/GowunBatang-Bold.ttf")
  })
    
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      },3000)
      // googleSigninConfigure();
    },[])
    if(!loaded){
      return null;
  }
    if(loading){
      return <LoadingPage/>
    }else{

    
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="홈" screenOptions={{drawerPosition: 'right'}} >
        <Drawer.Screen name="홈" component={StackNavigator} options={({navigation})=>({
          
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
                    <View style={styles.MainTitleView}>
                        <Text style={styles.MainTitle}>TATOO</Text>
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
        <Drawer.Screen name="공지사항" component={Notice} />
        <Drawer.Screen name="찜 목록" component={LikePage} />
        
      </Drawer.Navigator>
    </NavigationContainer>
    )
  }
}
const styles = StyleSheet.create({
  MainTitleView:{
    marginLeft:70,
    marginTop:0,
  },
  MainTitle:{
    fontSize:30,
    fontWeight:"500",
    fontFamily:"Lobster",
},
  fontImg:{
    fontSize:30,
    marginRight:5,
  },
});
