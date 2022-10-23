import React from "react";
import { StyleSheet,TextInput, Image,View, Text, ScrollView,TouchableOpacity,ImageBackground } from 'react-native';
export default function LoginMenu(){
    
    
    return(
    <View style={styles.joinform}>
        <View style={styles.idform}>
            <Text>아이디 :  </Text>
            <TextInput placeholder="아이디를 입력하세요"/>
            <TouchableOpacity><Text>   확인</Text></TouchableOpacity>
        </View>
        <View style={styles.fwform}>
            <Text>비밀번호 :  </Text>
            <TextInput placeholder="비밀번호를 입력하세요"/>
            <TextInput placeholder="비밀번호확인을위해 입력하세요"/>
            <TouchableOpacity><Text>   확인</Text></TouchableOpacity>
        </View>
        <View style={styles.fwform}>
            <Text>연락처 :  </Text>
            <TextInput placeholder="연락처를 입력하세요"/>
            <TouchableOpacity><Text>   인증확인</Text></TouchableOpacity>
        </View>
        <View style={styles.btnform}>
            <TouchableOpacity>
                <Text style={styles.btnText}>가입하기</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>취소</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    joinform:{
        flex:2,
        flexDirection:"colum",
        justifyContent:"space-around",
        alignItems:"center",
    },
    idform:{
        alignItems:"center",
    
    },
    fwform:{
        alignItems:"center",
    
    },
    btnform:{
        alignItems:"center",
        flexDirection:"row",
        
    },
    btnText:{
        marginRight:15,
    }
})
