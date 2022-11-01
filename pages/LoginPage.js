import React from "react";
import { StyleSheet,TextInput, Image,View, Text, Alert,ScrollView,TouchableOpacity,ImageBackground ,PhoneNumberInput} from 'react-native';
export default function LoginPage({navigation}){

    return (
        <View>
            <View style={styles.loginForm}>
                <View style={{flexDirection:"row" ,marginBottom:20,}}>
                    <Text style={styles.text}>아이디:</Text><TextInput style={styles.text} placeholder="아이디를 입력하세요"/>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.text}>비밀번호:</Text><TextInput style={styles.text} placeholder="비밀번호를 입력하세요"/>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.text}>비밀번호확인:</Text><TextInput style={styles.text} placeholder="비밀번호를 입력하세요"/>
                </View>
            
            </View>
            <View style={styles.loginFormBtn}>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.text}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={()=>{navigation.navigate("JoinPage")}}>
                <Text style={styles.text}>회원가입</Text>
            </TouchableOpacity>
            </View>
            
            <TouchableOpacity>
                <Text>아이디찾기</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>비밀번호찾기</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>구글로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Facebook</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    loginForm:{
        margin:20,
        alignSelf:"center",
    },
    loginFormBtn:{
        margin:30,
        flexDirection:"row",
        justifyContent:"space-around",
        
    },
    text:{
        fontSize:15,
        textAlign:"center",
        
    },
    loginBtn:{
        width:200,
        height:50,
        borderRadius:3,
        backgroundColor:"pink",
        justifyContent:"center",
    }
  });