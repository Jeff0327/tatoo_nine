import React ,{useState,useEffect} from "react";
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity,TextInput } from 'react-native';
import {firebase_db} from "../firebaseConfig";
export default function SearchPage(){
    
    const [text, setText] = useState("");

    const onChange=()=>{
        
    }
    return(
        
        <View>
            <TextInput style={styles.fontstyle} placeholder="TATOO 검색" value={text} onChange={onChange}></TextInput>

        </View>
    )
}
const styles = StyleSheet.create({
    fontstyle:{
        fontSize:15,
    },
})
