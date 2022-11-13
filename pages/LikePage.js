import React,{useState,useEffect} from "react";
import { StyleSheet,TextInput, Image,View, Text, Alert,ScrollView,TouchableOpacity,ImageBackground ,PhoneNumberInput} from 'react-native';
import { firebase_db } from "../firebaseConfig";
import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';

export default function LikePage({content}){
    
      const [like,onLike]=useState([])

      let userUniqueId;

      const userId =async()=>{
        if(isIOS){
            let iosId = await Application.getIosIdForVendorAsync();
                userUniqueId = iosId
            }else{
                userUniqueId = await Application.androidId
            }
      }
      
      useEffect(()=>{
        setTimeout(()=>{
            firebase_db.ref('/like'+userUniqueId).once('value').then((snapshot)=>{
                let tip=snapshot.val();
                onLike(tip);
            })
        })
        userId();
      })
      console.log(userUniqueId);
      console.log(like)
    return(
    <ScrollView>
        
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    
})
