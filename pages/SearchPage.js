import AsyncStorage from "@react-native-async-storage/async-storage";
import React ,{useState,useEffect} from "react";
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity,TextInput } from 'react-native';
import {firebase_db} from "../firebaseConfig";
import ImagePage from "./ImagePage";
export default function SearchPage({navigation,route}){
    
    const [onstate,onSetState] = useState([]);
    const [text, setText] = useState("");
    const [filt,setFilt] = useState([""]);
    const [result,setResult]=useState([]);
    
    
    
   
    let halo=route.params
    
    
    
      
    
    // console.log(onstate.map((content, i)=>{return (content.catagory)}))
    
    useEffect(()=>{
      
      
        setTimeout(()=>{
          firebase_db.ref('/images').once('value').then((snapshot)=>{
            let tip=snapshot.val();
            onSetState(tip);
            
            console.log(setText)
            setResult(onstate.filter((e)=>{return e.catagory==halo}))   
          })
        },1000)
      },[setResult,setText])

      
    return(
      
        
        <ScrollView style={styles.mainImgContainer} horizontal = {false} pagingEnabled ={true}>
            
        {result.map((content, i)=>{
          return(
          <ImagePage 
          content={content} 
          key={i} 
          navigation={navigation}
          />
          )
        })}
        </ScrollView>
      
    )
}

const styles = StyleSheet.create({
    fontstyle:{
        fontSize:15,
    },
})
