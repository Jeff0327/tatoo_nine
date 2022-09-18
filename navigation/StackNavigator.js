import React,{useState,useEffect} from 'react';
import * as Linking from 'expo-linking';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image,View, Text, ScrollView,Button,TouchableOpacity,TextInput } from 'react-native';
import DetailPage from '../pages/DetailPage';
import MainPage from '../pages/MainPage';
import SearchPage from '../pages/SearchPage';
import ImagePage from '../pages/ImagePage';
import { Fontisto } from "@expo/vector-icons";



const Stack = createStackNavigator();

const link =()=>{
    Linking.openURL('https://www.instagram.com/tattooist_nine/');
    
}

const StackNavigator = () =>{

    const [text,setText] = useState("");
    
    useEffect(()=>{
        
    
    },[text])
    
    
    const onClear=()=>{
        
        setText("");
    }
    
    return (
        
        <Stack.Navigator initialRouteName='MainPage'
            screenOptions={({navigation,search})=>({
                headerStyle: {
                    backgroundColor: "white",
                    borderBottomColor: "white",
                    shadowColor: "white",
                },
                headerTitleAlign:"Left",
                headerTintColor: "#000",
                headerBackTitleVisible: false,
                headerRight:()=>(
                    <View style={{flexDirection:"row", marginHorizontal:10}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("SearchPage",search)}}><Fontisto style={styles.fontImg}name='search'/></TouchableOpacity>
                    <TouchableOpacity onPress={link}><Fontisto style={styles.fontImg} name='instagram'/></TouchableOpacity>
                    </View>
                    )
                ,
            })}  
        >

            <Stack.Screen name="TATOO NINE" component={MainPage}/>
            <Stack.Screen name="DetailPage" component={DetailPage} options={()=>({headerTitle:()=>{return (
            <Text style={styles.DetailTitle}>장르</Text>
            )}})}/>
            <Stack.Screen name="ImagePage" component={ImagePage}/>
            <Stack.Screen name="SearchPage" component={SearchPage} options={()=>({ headerTitle:()=>{
                return (
                <TextInput style={styles.Input} placeholder='타투검색' value={text} onChangeText={text=>setText(text)}></TextInput>
                )}, headerRight:()=>{return (<TouchableOpacity onPress={onClear}><Text>clear</Text></TouchableOpacity>)}})}
            /> 
        </Stack.Navigator>
        
    )
}
const styles=StyleSheet.create({
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