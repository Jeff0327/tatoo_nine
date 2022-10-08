import AsyncStorage from "@react-native-async-storage/async-storage";
import React ,{useState,useEffect} from "react";
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity,TextInput } from 'react-native';
import {firebase_db} from "../firebaseConfig";
import ImagePage from "./ImagePage";
import * as Application from 'expo-application';

const isIOS = Platform.OS === 'ios';
export default function SearchPage({navigation,route}){
    
    const [onstate,onSetState] = useState([]);
    const [ready, setReady]=useState(true)



    useEffect(()=>{
      
      getLike(); 
      },[])

      const getLike = async () => {
        let userUniqueId;  
        
        if(isIOS){
        let iosId = await Application.getIosIdForVendorAsync();
        
            userUniqueId = iosId
        }else{
            userUniqueId = await Application.androidId
        }
        console.log(userUniqueId)
        firebase_db.ref('/savedata/'+userUniqueId).once('value').then((snapshot)=>{
          console.log("파이어베이스에서 data가져옴")
          let tip=snapshot.val();
          // let tip_list=Object.values(tip)
          
            onSetState(tip)
          
          
            
            console.log(onstate.map((content)=>{return content.catagory}))
            
        })
        
    }
    return(
      
        
        <ScrollView style={styles.mainImgContainer} horizontal = {false} pagingEnabled ={true}>
            
        {/* {onstate.map((content, i)=>{
          return(
          <ImagePage 
          content={content} 
          key={i} 
          navigation={navigation}
          />
          )
        })} */}
        
        </ScrollView>
      
    )
}

const styles = StyleSheet.create({
    fontstyle:{
        fontSize:15,
    },
})
