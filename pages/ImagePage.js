import React ,{useState,useEffect, useContext} from "react";
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity,Share } from 'react-native';
import {useFonts} from "expo-font";
import { Fontisto } from "@expo/vector-icons";
import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';
import {firebase_db} from "../firebaseConfig";

const TATOOISTIMG="https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2Fcontent%2Fblackwalk.jpg?alt=media&token=501816e3-ff9b-48d7-b0c7-80840355a41e"
export default function ImagePage({content,navigation,onstate, onSetState}){
    
        const [like, onlike]=useState(false);
        
        
        
        
        let userUniqueId;
        const [loaded] = useFonts({
            //Eng
            Alumni_Regular:require("../assets/font/AlumniSansPinstripe-Regular.ttf"),
            Alumni_Italic:require("../assets/font/AlumniSansPinstripe-Italic.ttf"),
            

            //Kor
            Nanum_Coding:require("../assets/font/NanumGothicCoding-Regular.ttf"),
            Dongle_Regular:require("../assets/font/Dongle-Regular.ttf"),
            NanumPen_Regular:require("../assets/font/NanumPenScript-Regular.ttf"),
            Nanum_Myeongjo:require("../assets/font/NanumMyeongjo-Regular.ttf"),
            Cute_Font:require("../assets/font/CuteFont-Regular.ttf"),
        })
        useEffect(()=>{
            likely();
            remove();
        },[like])
        const likely = async () => {
        
            if(isIOS){
            let iosId = await Application.getIosIdForVendorAsync();
                userUniqueId = iosId
            }else{
                userUniqueId = await Application.androidId
            }
            
            if(like===true){
                firebase_db.ref('/like/'+userUniqueId+content.idx).set(content,function(error){
                    console.log(error)
                    
                });
            }
               
        }
        
        const remove = async (cidx) => {
            
            if(isIOS){
            let iosId = await Application.getIosIdForVendorAsync();
                userUniqueId = iosId
            }else{
                userUniqueId = await Application.androidId
            }
      
            if(like===false){
                firebase_db.ref('/like/'+userUniqueId+'/'+cidx).remove().then(function(){
              
                    //내가 찝 해제 버튼을 누른 카드 idx를 가지고
                    //찝페이지의 찜데이터를 조회해서
                    //찜해제를 원하는 카드를 제외한 새로운 찜 데이터(리스트 형태!)를 만든다
                    let result = onstate.filter((data,i)=>{
                      return data.idx !== cidx
                    })
                    //이렇게 만들었으면!
                    //LikePage로 부터 넘겨 받은 tip(찜 상태 데이터)를
                    //filter 함수로 새롭게 만든 찜 데이터를 구성한다!
                    console.log(result)
                    onSetState(result)
            
                  })
            }
            
        }
        
        if(!loaded){
            return null;
        }
        const onShare=()=>{
            Share.share({message:`${content.image}`})
        }
        const onLike=()=>{
            like===true ? 
            onlike(false)  : 
            onlike(true) 
            
        }
        
        
        return(
        
            <View>
                <View style={styles.container}>
                    <View style={styles.Artist}>
                    <Image style={styles.tatooist} source={{uri:TATOOISTIMG}}/>
                        <TouchableOpacity onPress={()=>{navigation.navigate("TatooArtist",content)}}>
                        <Text style={styles.pos}>{`${content.crew}/${content.artist}`}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate("TatooArtist",content)}}>
                        <Image resizeMode="stretch" style={styles.mainImg}source={{uri: content.image}}/>
                    </TouchableOpacity>
                    <Text style={styles.kindof}>{`| ${content.catagory} | `}</Text>
                    <View style={{flexDirection:"row"}}>
                    <Text style={styles.title}>{`| ${content.title} | `}</Text>
                    <Text style={styles.desc} numberOfLines={2}>{content.desc.length > 20 ? content.desc.slice(0,20)+'...' : content.desc}</Text>
                    </View>
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
        backgroundColor:"white",
        shadowColor:"#A9A9A9",
        shadowOpacity:0.5,
        shadowOffset:{width:3,height:3},
        padding:10,
        flex:1,
    },
    Artist:{
        flexDirection:"row",
        margin:5,
    },
    mainImg:{
        width:340,
        height:300,
        marginRight:20,
        
    },
    title:{
        fontSize:20,
        fontWeight:"400",
        fontFamily:"Cute_Font",
    },
    desc:{
        fontSize:15,
        fontFamily:"Cute_Font",
    },
    pos:{
        fontSize:25,
        fontWeight:"500",
        fontFamily:"NanumPen_Regular",
        alignSelf:"center",
        margin:10,
    },
    kindof:{
        fontSize:20,
        fontFamily:"Cute_Font",
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
    },
})