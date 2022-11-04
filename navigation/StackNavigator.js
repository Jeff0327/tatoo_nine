import React,{useState,useEffect,useRef} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity,TextInput, RefreshControl } from 'react-native';
import MainPage from '../pages/MainPage';
import SearchPage from '../pages/SearchPage';
import ImagePage from '../pages/ImagePage';
import JoinPage from "../pages/JoinPage";
import TatooArtist from '../pages/TatooArtist';
const Stack = createStackNavigator();



const StackNavigator = () =>{

    
    
    return (
        
        <Stack.Navigator initialRouteName='MainPages' screenOptions={{headerShown:false}}>
            <Stack.Screen name="MainPages" component={MainPage}/>
            <Stack.Screen name="ImagePage" component={ImagePage}/>
            <Stack.Screen name="JoinPage" component={JoinPage} options={{headerShown:false}}/>
            <Stack.Screen name="SearchPage" component={SearchPage} options={{headerShown:false}}/>
            <Stack.Screen name="TatooArtist" component={TatooArtist} options={{headerShown:false}}/>
            </Stack.Navigator>
            
    )
}

const styles=StyleSheet.create({
   
})
export default StackNavigator;