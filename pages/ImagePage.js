import React ,{useState,useEffect} from "react";
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity } from 'react-native';
import {useFonts} from "expo-font";



export default function ImagePage({content,navigation}){
    
       
        const [loaded] = useFonts({
            //Eng
            Alumni_Regular:require("../assets/font/AlumniSansPinstripe-Regular.ttf"),
            Alumni_Italic:require("../assets/font/AlumniSansPinstripe-Italic.ttf"),
            RobotoMono_Regular:require("../assets/font/RobotoMono-Regular.ttf"),

            //Kor
            Dongle_Regular:require("../assets/font/Dongle-Regular.ttf"),
            NanumPen_Regular:require("../assets/font/NanumPenScript-Regular.ttf"),
        })
        if(!loaded){
            return null;
        }
        
        return(
        
            <View>
                <View style={styles.container}>
                    <Text style={styles.pos}>부위:{content.where}</Text>
                    <Image style={styles.mainImg}source={{uri: content.image}}/>
                    <Text style={styles.kindof}>장르:{content.catagory}</Text>
                    <Text style={styles.title}>{content.title}</Text>
                    <Text style={styles.desc} numberOfLines={2}>{content.desc.length > 20 ? content.desc.slice(0,20)+'...' : content.desc}</Text>
                </View>
                
            </View>
        )
    
}
const styles=StyleSheet.create({
    container:{
        marginBottom:20,
        backgroundColor:"#dcdcdc",
        padding:10,
        flex:1,
    },
    mainImg:{
        width:340,
        height:300,
        marginRight:20,
    },
    title:{
        fontSize:20,
        fontWeight:"400",
        fontFamily:"NanumPen_Regular",
    },
    desc:{
        fontSize:15,
        fontFamily:"NanumPen_Regular",
    },
    pos:{
        fontSize:23,
        fontWeight:"500",
        fontFamily:"NanumPen_Regular",
    },
    kindof:{
        fontSize:23,
        fontFamily:"NanumPen_Regular",
    }
})