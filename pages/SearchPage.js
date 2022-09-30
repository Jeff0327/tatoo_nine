import AsyncStorage from "@react-native-async-storage/async-storage";
import React ,{useState,useEffect} from "react";
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity,TextInput } from 'react-native';
import {firebase_db} from "../firebaseConfig";
import ImagePage from "./ImagePage";

export default function SearchPage({navigation}){
    
    const [onstate,onSetState] = useState([]);
    // const [text, setText] = useState(["블랙워크"]);
    const [filt,setFilt] = useState([""]);
    const [result,setResult]=useState([]);
    
    
    
    useEffect(()=>{
      
        setTimeout(()=>{
          firebase_db.ref('/images').once('value').then((snapshot)=>{
            let tip=snapshot.val();
            onSetState(tip);
            setResult(onstate.filter((e)=>{return e.catagory=={text}}))   
          })
        },1000)
      },[setResult])

      
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
