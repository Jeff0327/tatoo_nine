import React ,{useState,useEffect} from "react";
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity,TextInput } from 'react-native';
import {firebase_db} from "../firebaseConfig";
export default function SearchPage(route){
    
    const [text, setText] = useState("");

    console.log(route.text);
    
    return(
        
        <View>
            

        </View>
    )
}
const styles = StyleSheet.create({
    fontstyle:{
        fontSize:15,
    },
})
