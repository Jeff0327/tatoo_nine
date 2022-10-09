import React,{useState,useEffect,useRef} from 'react';
import * as Linking from 'expo-linking';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity,TextInput, RefreshControl } from 'react-native';
import MainPage from '../pages/MainPage';
import SearchPage from '../pages/SearchPage';
import ImagePage from '../pages/ImagePage';
import { Fontisto } from "@expo/vector-icons";
import {useFonts} from "expo-font";
import {firebase_db} from "../firebaseConfig";
import * as Application from 'expo-application';
import { faHourglassEmpty } from '@fortawesome/free-solid-svg-icons';

const isIOS = Platform.OS === 'ios';


const Stack = createStackNavigator();

const link =()=>{
    Linking.openURL('https://www.instagram.com/tattooist_nine/'); //인스타링크
    
}

const StackNavigator = () =>{

    const [loaded] = useFonts({
        //Only Eng support font
        Alumni_Regular:require("../assets/font/AlumniSansPinstripe-Regular.ttf"),
        Alumni_Italic:require("../assets/font/AlumniSansPinstripe-Italic.ttf"),
        RobotoMono_Regular:require("../assets/font/RobotoMono-Regular.ttf"),
    
    })
    if(!loaded){
        return null;
    }
    
    return (
        
        <Stack.Navigator initialRouteName='MainPage'
            
            screenOptions={({navigation})=>({
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
                <TouchableOpacity onPress={link}>
                    <Fontisto style={styles.fontImg} name='instagram'/>
                </TouchableOpacity>
                
            </View>
        )    
        }
                    
                    
                    
                ,
            })}  
        >
            
            <Stack.Screen name="MainPage" component={MainPage}/>
            <Stack.Screen name="ImagePage" component={ImagePage}/>
            <Stack.Screen name="SearchPage" component={SearchPage} options={{headerShown:false}}/>
            </Stack.Navigator>
            
    )
}

const styles=StyleSheet.create({
    MainTitle:{
        fontSize:20,
        fontWeight:"500",
        fontFamily:"RobotoMono_Regular",
        
    },
    fontImg:{
        fontSize:30,
        marginRight:5,
      },
      
})
export default StackNavigator;