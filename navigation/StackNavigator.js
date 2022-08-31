import React from 'react';
import * as Linking from 'expo-linking';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image,View, Text, ScrollView,Button,TouchableOpacity } from 'react-native';
import DetailPage from '../pages/DetailPage';
import MainPage from '../pages/MainPage';
import SearchPage from '../pages/SearchPage';
import { Fontisto } from "@expo/vector-icons";

const Stack = createStackNavigator();

const link =()=>{
    Linking.openURL('https://www.instagram.com/tattooist_nine/');
    
}
const StackNavigator = ({navigation}) =>{
    return (
        <Stack.Navigator initialRouteName='MainPage'
            screenOptions={{
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
                    <TouchableOpacity onPress={()=>{navigation.navigate("SearchPage");}}><Fontisto style={styles.fontImg}name='search'/></TouchableOpacity>
                    <TouchableOpacity onPress={link}><Fontisto style={styles.fontImg} name='instagram'/></TouchableOpacity>
                    </View>
                    )

            }}   
        >
            {/* <Stack.Group screenOptions={({navigation})=>({
                presentation:'modal',
                headerRight:()=>(
                <View style={{flexDirection:"row", marginHorizontal:10}}>
                <TouchableOpacity onPress={()=>{navigation.navigate("SearchPage")}}><Fontisto style={styles.fontImg}name='search'/></TouchableOpacity>
                <TouchableOpacity onPress={link}><Fontisto style={styles.fontImg} name='instagram'/></TouchableOpacity>
                </View>
                )
            })
            }>
            <Stack.Screen name="TATOO NINE" component={MainPage}/>
            <Stack.Screen name="SearchPage" component={SearchPage}/>    
            </Stack.Group> */}
            <Stack.Screen name="TATOO NINE" component={MainPage}/>
            <Stack.Screen name="DetailPage" component={DetailPage}/>
            <Stack.Screen name="SearchPage" component={SearchPage}/> 
        </Stack.Navigator>
        
    )
}
const styles=StyleSheet.create({
    fontImg:{
        fontSize:30,
        marginRight:5,
      },
})
export default StackNavigator;