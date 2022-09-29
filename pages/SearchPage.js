import AsyncStorage from "@react-native-async-storage/async-storage";
import React ,{useState,useEffect} from "react";
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity,TextInput } from 'react-native';
import {firebase_db} from "../firebaseConfig";
import StackNavigator from "../navigation/StackNavigator";
import ImagePage from "./ImagePage";
export default function SearchPage({navigation,route,setText}){
    
    const [onstate,onSetState] = useState([]);
    // const [text, setText] = useState(["블랙워크"]);
    const [filt,setFilt] = useState([""]);
    const [result,setResult]=useState([]);
    const [get,setGet] =useState("")
    const [go, setGo] = useState(false);

    let dater=route.params;
    
    
    const getText=async()=>{
        try{
            const value =await AsyncStorage.getItem("savedata")
            console.log(value);
            if(value!=null){
                setGet(value);
            }
        }catch(e){

        }
    }

    
    useEffect(()=>{
      
        setTimeout(()=>{
          firebase_db.ref('/images').once('value').then((snapshot)=>{
            let tip=snapshot.val();
            onSetState(tip);
            setResult(onstate.filter((e)=>{return e.catagory=={dater}}))   

          })
          
        },1000)
        
        
      },[setResult])

      
      
      
      
    
    return(
        
        <ScrollView style={styles.mainImgContainer} horizontal = {false} pagingEnabled ={true}>
            
        {result.map((content, i)=>{
          return(
          <ImagePage content={content} key={i} navigation={navigation}/>
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
