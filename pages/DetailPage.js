import React ,{useState,useEffect} from "react";
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity } from 'react-native';
import {firebase_db} from "../firebaseConfig";
export default function DetailPage({content,navigation,route}){
    useEffect(()=>{
        firebase_db.ref("image").once('value').then((snapshot)=>{
            let dater=snapshot.val();
        })
        
        // let data = route.params;
        // console.log(data);
    },[])
    
    
    return(
        
        <View>
            
           
        </View>
    )
}
const styles = StyleSheet.create({
    mainImg:{
        width:400,
        height:400,
    }
})
