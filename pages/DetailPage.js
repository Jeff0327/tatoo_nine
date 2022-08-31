import React ,{useState,useEffect} from "react";
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity } from 'react-native';
import {firebase_db} from "../firebaseConfig";
export default function DetailPage({content,navigation,route}){
    useEffect(()=>{
        firebase_db.ref("image").once('value').then((snapshot)=>{
            let dater=snapshot.val();
        })
        
    },[])
    
    
    return(
        
        <View>
            
            {/* <Text>장르:{content.catagory}</Text>
            <Text style={styles.title}>작품명:{content.title}</Text>
            <Text style={styles.desc} numberOfLines={2}>설명:{content.desc.length > 20 ? content.desc.slice(0,20)+'...' : content.desc}</Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    mainImg:{
        width:400,
        height:400,
    }
})
