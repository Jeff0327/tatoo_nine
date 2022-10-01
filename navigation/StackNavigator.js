import React,{useState,useEffect} from 'react';
import * as Linking from 'expo-linking';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity,TextInput } from 'react-native';
import MainPage from '../pages/MainPage';
import SearchPage from '../pages/SearchPage';
import ImagePage from '../pages/ImagePage';
import { Fontisto } from "@expo/vector-icons";
import {useFonts} from "expo-font";
import {firebase_db} from "../firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';




const Stack = createStackNavigator();

const link =()=>{
    Linking.openURL('https://www.instagram.com/tattooist_nine/'); //인스타링크
    
}

const StackNavigator = () =>{

    const [text,setText]=useState("");
    
    const [onstate,onSetState] = useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            firebase_db.ref('/images').once('value').then((snapshot)=>{
              let tip=snapshot.val();
              onSetState(tip);
                
            })
          },1000)
          
    },[text])
    
    let check=text.split("");
    
        let dater=onstate.filter((e)=>{return e.catagory==check})
        

        
        const saveData=async()=>{
            try{
                
            await AsyncStorage.setItem('textKey',text)
            
            
            }catch(e){

            }
        }
        
        // const test=onstate.filter((e)=>{return e.catagory=="블랙워크"})
        
        
        
    const onChangeText=(text)=>{
        setText(text);
        
    }
    const onClear=()=>{ //텍스트 clear function
        
        setText("");
    }
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
                            <TouchableOpacity 
                            onPress={()=>{navigation.navigate("MainPage",{text})}}
                            >
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
            <Stack.Screen name="SearchPage" component={SearchPage} options={({navigation})=>({ 
                    headerTitle:()=>{
                        
                    return (
                            
                    <TextInput 
                    style={styles.Input} 
                    placeholder='타투검색' 
                    value={text} 
                    onChangeText={onChangeText}>
                    </TextInput>
                    
                        )
                    },
                    
                    headerRight:()=>{
                    return (
                    <TouchableOpacity 
                    onPress={()=>{navigation.navigate("SearchPage",text)}}>
                        <Text>clear</Text>
                    </TouchableOpacity>
                        )
                    },
                })
                }
                />
                
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
      DetailTitle:{
        fontSize:20,
      },
      Input:{
        fontSize:15,
      }
})
export default StackNavigator;