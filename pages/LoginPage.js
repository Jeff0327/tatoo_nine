import React from "react";
import { StyleSheet,TextInput, Image,View, Text, Alert,ScrollView,TouchableOpacity,ImageBackground ,PhoneNumberInput} from 'react-native';
export default function LoginPage({navigation}){

    return (
        <View>
            <TouchableOpacity onPress={()=>{navigation.navigate("JoinPage")}}>
                <Text>회원가입</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>로그인</Text>
            </TouchableOpacity>
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
                <Text>폰로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Facebook</Text>
            </TouchableOpacity>
        </View>
    )
}