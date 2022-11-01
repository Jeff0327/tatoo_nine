import React ,{useState,useEffect} from "react";
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity,Share } from 'react-native';
import {useFonts} from "expo-font";
import { Fontisto } from "@expo/vector-icons";


const TATOOISTIMG="https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2Fcontent%2Fblackwalk.jpg?alt=media&token=501816e3-ff9b-48d7-b0c7-80840355a41e"
export default function ImagePage({content,navigation}){
    
        const [like, onlike]=useState(false);
        const [loaded] = useFonts({
            //Eng
            Alumni_Regular:require("../assets/font/AlumniSansPinstripe-Regular.ttf"),
            Alumni_Italic:require("../assets/font/AlumniSansPinstripe-Italic.ttf"),
            

            //Kor
            Nanum_Coding:require("../assets/font/NanumGothicCoding-Regular.ttf"),
            Dongle_Regular:require("../assets/font/Dongle-Regular.ttf"),
            NanumPen_Regular:require("../assets/font/NanumPenScript-Regular.ttf"),
        })
        if(!loaded){
            return null;
        }
        const onShare=()=>{
            Share.share({message:`${content.image}`})
        }
        const onLike=()=>{
            like===true ? onlike(false) : onlike(true)
            console.log(like)
        }
        return(
        
            <View>
                <View style={styles.container}>
                    <Image style={styles.tatooist} source={{uri:TATOOISTIMG}}/>
                    <Text style={styles.pos}>부위/{content.where}</Text>
                    <Image style={styles.mainImg}source={{uri: content.image}}/>
                    <Text style={styles.kindof}>장르/{content.catagory}</Text>
                    <Text style={styles.title}>{content.title}</Text>
                    <Text style={styles.desc} numberOfLines={2}>{content.desc.length > 20 ? content.desc.slice(0,20)+'...' : content.desc}</Text>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <TouchableOpacity onPress={onLike}style={styles.likeBtn}>
                            {like===false ?
                            <Fontisto style={styles.fontImg} name='heart-alt'/> :
                            <Fontisto style={styles.fontImg} name='heart'/>
                            }
                        </TouchableOpacity>   
                        <TouchableOpacity onPress={onShare}style={styles.shareBtn}>
                            <Fontisto style={styles.fontImg} name='share-a'/>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        )
    
}
const styles=StyleSheet.create({
    container:{
        marginBottom:20,
        backgroundColor:"#D3D3D3",
        shadowColor:"#A9A9A9",
        shadowOpacity:0.5,
        shadowOffset:{width:3,height:3},
        padding:10,
        flex:1,
    },
    mainImg:{
        width:340,
        height:300,
        marginRight:20,
        
    },
    title:{
        fontSize:15,
        fontWeight:"400",
        fontFamily:"Nanum_Coding",
    },
    desc:{
        fontSize:15,
        fontFamily:"Nanum_Coding",
    },
    pos:{
        fontSize:15,
        fontWeight:"500",
        fontFamily:"Nanum_Coding",
    },
    kindof:{
        fontSize:15,
        fontFamily:"Nanum_Coding",
    },
    shareBtn:{
        alignSelf:"flex-end",
    },
    likeBtn:{
        alignSelf:"flex-start",
    },
    fontImg:{
        fontSize:20,
        marginRight:5,
    },
    tatooist:{
        borderRadius:25,
        width:50,
        height:50,
        flexDirection:"row",
    }
})