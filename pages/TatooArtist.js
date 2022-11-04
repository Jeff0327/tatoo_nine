import React,{useState,useEffect} from "react"
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity,TextInput, RefreshControl } from 'react-native';
import * as Linking from 'expo-linking';
import { Fontisto } from "@expo/vector-icons";
const TatooArtist=({route})=>{


    const Artist=route.params
    const [insta,setInsta]=useState("");
    
    
    useEffect(()=>{
        setInsta(Artist.insta)
    },[])
    const link =()=>{
        Linking.openURL(insta); //인스타링크
        
    }
    return (
    <View style={styles.Container}>
        <View style={styles.Title}>
            <Text>{`${Artist.crew}/${Artist.artist}`}</Text>
            <TouchableOpacity style={{marginLeft:10,}}onPress={link}><Fontisto style={styles.fontImg} name='instagram'/></TouchableOpacity>
            
        </View>
        <View style={styles.document}>
            <Text>{`경력:${Artist.career}년`}</Text>
            <Text>{`지역:${Artist.area}`}</Text>
            <Image style={{width:300,height:300}}source={{uri:Artist.image}}/>
            <Text>{`장르:${Artist.catagory}`}</Text>
            <Text>{`size:${Artist.size}cm`}</Text>
            <Text>{`가격:${Artist.price}0,000￦`}</Text>
        </View>
    </View>
    )
}
const styles=StyleSheet.create({
    Container:{
        alignItems:"center",
    },
    Title:{
        flexDirection:"row",
    },
    document:{
        alignItems:"center",
    },
    fontImg:{
        fontSize:20,
        marginRight:5,
    },
    
})
export default TatooArtist;