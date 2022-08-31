import React ,{useState,useEffect} from "react";
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity } from 'react-native';

export default function ImagePage({content,navigation}){
    
    return(
        
        <View>
            <Image style={styles.mainImg}source={{uri: content.image}}/>
            <Text>장르:{content.catagory}</Text>
            <Text style={styles.title}>작품명:{content.title}</Text>
            <Text style={styles.desc} numberOfLines={2}>설명:{content.desc.length > 20 ? content.desc.slice(0,20)+'...' : content.desc}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    mainImg:{
        width:350,
        height:300,
        borderRadius:20,
        marginRight:20,
    },
    title:{
        fontSize:15,
        fontWeight:"400",
    },
    desc:{
        fontSize:12,
    }
})