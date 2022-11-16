import React,{useState,useEffect} from "react";
import { StyleSheet,TextInput, Image,View, Text, Alert,ScrollView,TouchableOpacity,ImageBackground ,PhoneNumberInput} from 'react-native';
import { firebase_db } from "../firebaseConfig";
import * as Application from 'expo-application';
import ImagePage from "./ImagePage";
const isIOS = Platform.OS === 'ios';

export default function LikePage({navigation,content}){
    
      const [like,onLike]=useState([])
    const [ready, setReady]=useState(true)
      
      useEffect(()=>{
        getLike()
    },[])
    
    
      const getLike =async()=>{
        let userUniqueId;    
        if(isIOS){
            let iosId = await Application.getIosIdForVendorAsync();
                userUniqueId = iosId
            }else{
                userUniqueId = await Application.androidId
            }
            console.log(userUniqueId)
            firebase_db.ref('/like/'+userUniqueId).once('value').then((snapshot)=>{
                let tip=snapshot.val();
                console.log(tip)
                
                if(tip && tip.length>0){
                    onLike(tip);
                    setReady(false)
                }
        })
      }
      
      
    return(
    <ScrollView>
        
         {
            
               like.map((content,i)=>{
                   return(<ImagePage key={i} content={content} navigation={navigation}/>)
               })
           }
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    
})
