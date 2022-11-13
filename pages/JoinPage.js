import React,{useState,useEffect} from "react";
import { StyleSheet,TextInput, Image,View, Text, Alert,ScrollView,TouchableOpacity,ImageBackground ,PhoneNumberInput} from 'react-native';
// import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
export default function LoginMenu({navigation}){

        const [email,setEmail] =useState("");
        const [password,setPassword] =useState("");
        const [secpassword, setSecpassword]=useState("");
        const checkpassword=()=>{
            if(password==secpassword){
                console.log("비밀번호가같습니다");
            }else{
                console.log("비밀번호를 확인하세요");
            }
        }


    return(
    <View style={styles.joinform}>
        <View style={styles.idform}>
            <Text>아이디 :  </Text>
            <TextInput value={email} placeholder="아이디를 입력하세요"/>
            <TouchableOpacity><Text>   확인</Text></TouchableOpacity>
        </View>
        <View style={styles.fwform}>
            <Text>비밀번호 :  </Text>
            <TextInput value={password} placeholder="비밀번호를 입력하세요"/>
            <TextInput value={secpassword} placeholder="비밀번호확인을위해 입력하세요"/>
            <TouchableOpacity onPress={checkpassword}><Text>   확인</Text></TouchableOpacity>
        </View>
        <View style={styles.fwform}>
            <Text>연락처 :  </Text>
            {/* <PhoneNumberInput placeholder="핸드폰번호입력하세요"/> */}
            <TouchableOpacity><Text>   인증확인</Text></TouchableOpacity>
        </View>
        <View style={styles.btnform}>
            <TouchableOpacity onPress>
                <Text style={styles.btnText}>가입하기</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.pop()}}>
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
