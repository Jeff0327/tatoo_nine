import React from "react";
import { StyleSheet,TextInput, Image,View, Text, Alert,ScrollView,TouchableOpacity,ImageBackground ,PhoneNumberInput} from 'react-native';
import "firebase/firestore";

export default function LoginMenu({navigation}){
    
        async function join(nickName, email, password, navigation){
            try{
                console.log(nickName,email,password)
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                const currentUser = firebase.auth().currentUser;
                const db=firebase.firestore();
                db.collection("users")
                .doc(currentUser.uid)
                .set({
                    email: currentUser.email,
                    nickName: nickName
                });
                Alert.alert("회원가입 성공")
                
            }catch(err){
                Alert.alert("문제있음",err.message)
            }
        }
        
    join();
    
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
            {/* <PhoneNumberInput placeholder="핸드폰번호입력하세요"/> */}
            <TouchableOpacity><Text>   인증확인</Text></TouchableOpacity>
        </View>
        <View style={styles.btnform}>
            <TouchableOpacity>
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
